const express = require("express");
const app = express();

function checkParams(req,res,next){ //==> function middleware
    if(req.params.age>18){
        req.name = "Hieu"  //=> create req.name = "Hieu"
        console.log(`age >18 and next()`);
        next() //=> next middleware
        console.log("after next() run")
        return 
    }
    else{
        req.name = "Hieu"
        res.status(500).json(`message :${req.name} not greater than 18  `)
    }
        // res.json("res after next()") ==> log error 

}

app.get("/:age",checkParams,(req,res,next)=>{
    res.status(200).json(`age: ${req.name} greater than 18`) //=> continous use req.name be declare in previous middleware
})

app.listen(3000,(req,res)=>{
    console.log("http://localhost:3000")
})