const express = require("express");
const teacher = require("./../Models/teacherSchema");
//return all teachers
module.exports.getAllTeachers = (req, res, next) => {
    teacher.find({})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            next(error);
        });
};
//return a teacher
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
//insert new teacher
module.exports.addTeacher = (req, res, next) => {
    const { id, firstName, lastName, email, password } = req.body;
    const file = req.file.filename; // Assuming you're using Multer for file uploads
    const imagePath = file ? file.path : null;
    console.log(req.file.filename)

    const newTeacher = new teacher({
        id: id,
        fullName: {
            firstName: firstName,
            lastName: lastName
        },
        email: email,
        password: password,
        image: file
    });

    newTeacher.save()
        .then((data) => {
            res.status(201).json({ message: "Data Added Successfully", data });
        })
        .catch((error) => {
            next(error);
        });
};

//update 
module.exports.updateTeacher =async (req, res) => {
    try {
        const updatedTeacher =await teacher.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTeacher) {
            throw new Error("Teacher not found");
        }
        return updatedTeacher;
    } catch (error) {
        throw error;
    }
};
//delete
module.exports.deleteTeacher = async(req, res) => {
    try {
        const id = req.body.id;
        const deletedTeacher = await teacher.findByIdAndDelete(id);
        if (!deletedTeacher) {
                return res.status(404).json({ error: "teacher not found" });
        }
        res.json({ message: "teacher deleted successfully" });
} catch (error) {
        console.error("Error deleting teacher:", error);
        res.status(500).json({ error: "Internal server error" });
}
};

module.exports.getAllClassSupervisors = async(req, res) => {
        try {
            const classesWithSupervisors = await Class.find({ supervisor: { $exists: true, $ne: null } })
                .populate('supervisor', 'name');
            const supervisors = classesWithSupervisors.map(cls => cls.supervisor);
            res.json({ supervisors });
        } catch (error) {
            console.error("Error getting class supervisors:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }; 

