const bodyParser = require("body-parser");
const express = require("express");
const child = require("./../Models/childSchema");

//get all children
module.exports.getAllChildren = (req, res, next) => {
        child.find({}).then((data) => {
                res.status(200).json(data);
        }
        ).catch(
                (error) => {
                        next(error)
                }
        );
};
module.exports.addChild = (req, res, next) => {
        let obj = new child(req.body);
        obj.save().then((data) => {
                res.status(201).json({ message: "Data Added Successfully", data });
        }

        ).catch((error) => {
                next(error);
        });
};
module.exports.getChildById = (req, res) => {
        const childId = req.body.id;
        child.findById(childId)
                .then((data) => {
                        if (!data) {
                                res.status(404).json({ message: "child not found" });
                        } else {
                                res.status(200).json(data);
                        }
                })
                .catch((error) => {
                        next(error);
                });
};
module.exports.updateChild = (req, res) => {
        try {

                const updateChild = child.findByIdAndUpdate(id, updateData, { new: true });
                if (!updateChild) {
                        throw new Error("child not found!!!");
                }
                return updateChild;
        } catch (error) {
                throw error;
        }
};
module.exports.deleteChild = (req, res) => {
        res.json({ data: "from del child" });
};
