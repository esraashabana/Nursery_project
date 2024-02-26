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
//insert new child
module.exports.addChild = (req, res, next) => {
        let obj = new child(req.body);
        obj.save().then((data) => {
                res.status(201).json({ message: "Data Added Successfully", data });
        }

        ).catch((error) => {
                next(error);
        });
};
//get child by id
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
//update child
module.exports.updateChild = async (req, res) => {
        try {

                const updateChild = await child.findByIdAndUpdate(id, updateData, { new: true });
                if (!updateChild) {
                        throw new Error("child not found!!!");
                }
                return updateChild;
        } catch (error) {
                throw error;
        }
};
//delete
module.exports.deleteChild = async (req, res) => {
        try {
                const id = req.body.id;
                const deletedChild = await child.findByIdAndDelete(id);
                if (!deletedChild) {
                        return res.status(404).json({ error: "Child not found" });
                }
                res.json({ message: "Child deleted successfully" });
        } catch (error) {
                console.error("Error deleting child:", error);
                res.status(500).json({ error: "Internal server error" });
        }
};