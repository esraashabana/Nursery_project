const express = require("express");
const teacher = require("./../Models/teacherSchema");
module.exports.getAllTeachers = (req, res) => {
        teacher.find({}).then((data) => {
                res.status(200).json(data);
        }
        ).catch(
                (error) => {
                        next(error)
                }
        );//promise

};
module.exports.getTeacherById = (req, res) => {
        res.json({ data: "from get teacher by id" });
};
module.exports.addTeacher = (req, res) => {
        let obj=new teacher(req.body);
     obj.save().then((data)=>{
        res.status(201).json({message:"Data Added Successfully",data});
     }

     ).catch((error)=>{
        next(error);
     });
};
module.exports.getAllTeachers = (req, res) => {
        res.json({ data: "from get all teacher" });
};
module.exports.updateTeacher = (req, res) => {
        res.json({ data: "from put teacher" });
};
module.exports.deleteTeacher = (req, res) => {
        res.json({ data: "from delete teacher" });
};
module.exports.getAllClassSupervisors = (req, res) => {
        res.json({ data: "from getAllClassSupervisors teacher" });
};
