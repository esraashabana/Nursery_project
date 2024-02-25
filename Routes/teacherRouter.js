const express = require("express");
const Controller = require("./../Controllers/teacherController");
const mwValidation=require("./../MiddleWares/validationMW");
const teacherValidation=require("./../MiddleWares/validator/teacherValidation");
const router = express.Router();

router.route("/teachers").get(
       
        Controller.getAllTeachers
).post(
        teacherValidation.insertArray,mwValidation,
        Controller.addTeacher
).put(
        teacherValidation.insertArray,mwValidation,
        Controller.updateTeacher
).delete(
        Controller.deleteTeacher
);

router.route("/teachers/:id").get(
        Controller.getTeacherById
);


router.route("/teachers/supervisors").get(Controller.getAllClassSupervisors);


module.exports = router;