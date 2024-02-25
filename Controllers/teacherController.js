const express=require("express");
module.exports.getAllTeachers=(req,res)=>{
res.json({data:"from get teacher"});
};
module.exports.getTeacherById=(req,res)=>{
        res.json({data:"from get teacher by id"});
};
module.exports.addTeacher=(req,res)=>{
        res.json({data:"from add teacher"});
};
module.exports.getAllTeachers=(req,res)=>{
        res.json({data:"from get all teacher"});
};
module.exports.updateTeacher=(req,res)=>{
        res.json({data:"from put teacher"});
};
module.exports.deleteTeacher=(req,res)=>{
        res.json({data:"from delete teacher"});
};
module.exports.getAllClassSupervisors=(req,res)=>{
        res.json({data:"from getAllClassSupervisors teacher"});
};
