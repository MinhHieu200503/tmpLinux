// const mongoose = require('mongoose');
const { User } = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthControllers = {
    data: [],
    register: async (req, res, next) => {
        try {
            //hash password with bcrypt
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            //create user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                admin: req.body.admin,
            });
            //save to dbs
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(`Error: ${error}`);
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.ACCESS_TOKEN_KEY,
            {
                expiresIn: '30s',
            }
        );
    },
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.REFRESH_TOKEN_KEY,
            {
                expiresIn: '365d',
            }
        );
    },
    loginUser: async (req, res, next) => {
        try {
            //check username
            const user = await User.findOne({
                username: req.body.username,
            });
            if (!user) return res.status(404).json('not found username');
            //check password
            const passwordUser = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!passwordUser) return res.status(404).json('Wrong password !');
            //create token
            const accessToken = AuthControllers.generateAccessToken(user);

            const refreshToken = AuthControllers.generateRefreshToken(user);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });
            AuthControllers.data.push(refreshToken);
            const { password, ...other } = user._doc;
            return res
                .status(200)
                .json({ ...other, accessToken, data: AuthControllers.data });
        } catch (error) {
            return res.status(500).json(`Error: ${error}`);
        }
    },
    RequestRefreshToken: async (req, res) => {
        try {
            const refresh = req.cookies.refreshToken;
            if (!refresh) return res.status(403).json("You're not login");
            if (!AuthControllers.data.includes(refresh)) {
                return res
                    .status(403)
                    .json(
                        "Your token not incluces in data or own's other account"
                    );
            }
            jwt.verify(
                refresh,
                process.env.REFRESH_TOKEN_KEY,
                (error, user) => {
                    if (error) {
                        return res.status(400).json(`error verify: ${error}`);
                    } else {
                        const newAccessToken =
                            AuthControllers.generateAccessToken(user);
                        const newRefreshToken =
                            AuthControllers.generateRefreshToken(user);
                        res.cookie('refreshToken', newRefreshToken);
                        AuthControllers.data.push(newRefreshToken);
                        AuthControllers.data = AuthControllers.data.filter(
                            (data) => data !== refresh
                        );
                        return res.status(200).json({
                            user,
                            newAccessToken: newAccessToken,
                            data: AuthControllers.data,
                        });
                    }
                }
            );

            console.log(AuthControllers.data);
        } catch (error) {
            res.status(400).json(`Error:  ${error}`);
        }
    },
    logOut: (req, res) => {
        res.clearCookie('refreshToken');
        AuthControllers.data = AuthControllers.data.filter(
            (data) => data !== res.cookies.refreshToken
        );

        return res
            .status(200)
            .json({ mess: 'Log out success', data: AuthControllers.data });
    },
};

module.exports = AuthControllers;
// export {};
