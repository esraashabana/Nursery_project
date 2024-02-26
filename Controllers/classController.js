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
module.exports.updateClass = (req, res) => {
        res.json({ data: "from put class" });
};
module.exports.deleteClass = (req, res) => {
        res.json({ data: "from del class" });
};
module.exports.getClassChildren = (req, res) => {
        res.json({ data: "from getclasschildren class" });
};
module.exports.getClassSupervisor = (req, res) => {
        res.json({ data: "from getclasssuper class" });
};
