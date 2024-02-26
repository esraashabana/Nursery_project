const express = require("express");
const teacher = require("./../Models/teacherSchema");

module.exports.getAllTeachers = (req, res, next) => {
        teacher.find({})
                .then((data) => {
                        res.status(200).json(data);
                })
                .catch((error) => {
                        next(error);
                });
};

module.exports.getTeacherById = (req, res) => {
        res.json({ data: "from get teacher by id" });
};

module.exports.addTeacher = (req, res, next) => {
        const {id, firstName, lastName, email, password } = req.body;
        const file = req.file; // Assuming you're using Multer for file uploads
        const imagePath = file ? file.path : null;
    
        const newTeacher = new teacher({
            id:id,
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
            image: imagePath
        });
    
        newTeacher.save()
            .then((data) => {
                res.status(201).json({ message: "Data Added Successfully", data });
            })
            .catch((error) => {
                next(error);
            });
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
