const express = require("express");
const Class = require("./../Models/classSchema");
//get all classe
module.exports.getAllClasses = (req, res) => {
        Class.find({})
                .then((data) => {
                        res.status(200).json(data);
                })
                .catch((error) => {
                        next(error);
                });
};
module.exports.addClass = (req, res) => {
        const object = new Class(req.body);
        object.save()
                .then(data => {
                        res.status(201).json(data)
                })
                .catch(error => next(error));

};
module.exports.getClassById = (req, res) => {
        const classId = req.body.id;
        Class.findById(classId)
                .then((data) => {
                        if (!data) {
                                res.status(404).json({ message: "class not found" });
                        } else {
                                res.status(200).json(data);
                        }
                })
                .catch((error) => {
                        next(error);
                });
};
module.exports.updateClass =async (req, res) => {
        try {

                const updateClass = await Class.findByIdAndUpdate(id, updateData, { new: true });
                if (!updateClass) {
                        throw new Error("class not found!!!");
                }
                return updateClass;
        } catch (error) {
                throw error;
        }
};
module.exports.deleteClass =async (req, res) => {
        try {
                const id = req.body.id;
                const deletedClass = await Class.findByIdAndDelete(id);
                if (!deletedClass) {
                        return res.status(404).json({ error: "Class not found" });
                }
                res.json({ message: "Class deleted successfully" });
        } catch (error) {
                console.error("Error deleting class:", error);
                res.status(500).json({ error: "Internal server error" });
        }
};
module.exports.getClassChildren =async (req, res) => {
        try {
                const classId = req.body.id; 
                const classWithChildren = await Class.findById(classId)
                    .populate('children', 'name');

                if (!classWithChildren) {
                    return res.status(404).json({ error: "Class not found" });
                }
                const children = classWithChildren.children;
                res.json({ children });
            } catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        };
module.exports.getClassSupervisor = (req, res) => {
        res.json({ data: "from getclasssuper class" });
};
