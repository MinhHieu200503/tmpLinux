const mongoose = require('mongoose');
const { User } = require('../models/Users');
const userController = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(`error : ${error}`);
        }
    },
    deleteByID: async (req, res, next) => {
        try {
            console.log(req.body);
            const user = await User.findByIdAndDelete(req.body._id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(`error : ${error}`);
        }
    },
};
module.exports = userController;
// export { userController };
