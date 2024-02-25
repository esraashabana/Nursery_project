const express=require("express");
const cotroller=require("./../Controllers/classController");
const validation=require("./../MiddleWares/validator/classValidation");
const mwValidation=require("./../MiddleWares/validationMW");
const router=express.Router();

router.route("/class").get(
        cotroller.getAllClasses
).post(
        validation.insertArray,mwValidation,
        cotroller.addClass
).put(
        validation.insertArray,mwValidation,
        cotroller.updateClass
).delete(
        cotroller.deleteClass
);
router.route("/class/:id").get(
        cotroller.getClassById
);
router.route("/class/child/:id").get(
        cotroller.getClassChildren
);
router.route("/class/teacher/:id").get(
        cotroller.getClassSupervisor
);

module.exports=router;