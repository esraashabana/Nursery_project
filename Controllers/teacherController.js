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
    const teacherId = req.body.id;
    teacher.findById(teacherId)
        .then((data) => {
            if (!data) {
                res.status(404).json({ message: "Teacher not found" });
            } else {
                res.status(200).json(data);
            }
        })
        .catch((error) => {
            next(error);
        });
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
        try {
                // Find the teacher by ID and update it with the new data
                const updatedTeacher = teacher.findByIdAndUpdate(id, updateData, { new: true });
                if (!updatedTeacher) {
                    throw new Error("Teacher not found");
                }
                return updatedTeacher;
            } catch (error) {
                throw error;
            }
};

module.exports.deleteTeacher = (req, res) => {
        res.json({ data: "from delete teacher" });
};

module.exports.getAllClassSupervisors = (req, res) => {
        res.json({ data: "from getAllClassSupervisors teacher" });
};
