const express=require("express");

module.exports.getAllClasses=(req,res)=>{
        res.json({data:"from get class by id"});
};
module.exports.addClass=(req,res)=>{
        res.json({data:"from add class"});
};
module.exports.getClassById=(req,res)=>{
        res.json({data:"from get  class"});
};
module.exports.updateClass=(req,res)=>{
        res.json({data:"from put class"});
};
module.exports.deleteClass=(req,res)=>{
        res.json({data:"from del class"});
};
module.exports.getClassChildren=(req,res)=>{
        res.json({data:"from getclasschildren class"});
};
module.exports.getClassSupervisor=(req,res)=>{
        res.json({data:"from getclasssuper class"});
};
