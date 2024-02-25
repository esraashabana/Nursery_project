const bodyParser = require("body-parser");
const express = require("express");
const child = require("./../Models/childSchema");

module.exports.getAllChildren = (req, res,next) => {
        child.find({}).then((data )=> {
                res.status(200).json(data);
        }
        ).catch(
                (error )=> {
                        next(error)
                }
        );//promise
       
};
module.exports.addChild = (req, res,next) => {
     let obj=new child(req.body);
     obj.save().then((data)=>{
        res.status(201).json({message:"Data Added Successfully",data});
     }

     ).catch((error)=>{
        next(error);
     });
};
module.exports.getChildById = (req, res) => {
        res.json({ data: "from get child by id" });
};
module.exports.updateChild = (req, res) => {
        res.json({ data: "from put child" });
};
module.exports.deleteChild = (req, res) => {
        res.json({ data: "from del child" });
};
