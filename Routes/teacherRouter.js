/**
 * @swagger
 * /teachers:
 *   get:
 *     description: Returns a list of teachers
 *     responses:
 *       200:
 *         description: A list of teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Models/teacherSchema.json'
 *   post:
 *     description: Insert data into teacher
 *     responses:
 *       201:
 *         description: Inserted data in teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/teacherSchema.json'
 *   put:
 *     description: Update teacher
 *     responses:
 *       200:
 *         description: Updated teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/teacherSchema.json'
 * put:
 *     description: delete teacher
 *     responses:
 *       200:
 *         description: delete teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/teacherSchema.json'
 */
const express = require("express");
const Controller = require("./../Controllers/teacherController");
const mwValidation = require("./../MiddleWares/validationMW");
const teacherValidation = require("./../MiddleWares/validator/teacherValidation");
const router = express.Router();
const uploadImg=require("./../MiddleWares/uploadImage");

router.route("/teachers").get(

        Controller.getAllTeachers
).post(
        uploadImg.single('image'),  teacherValidation.insertArray, mwValidation,
        Controller.addTeacher
).put(
        teacherValidation.insertArray, mwValidation,
        Controller.updateTeacher
).delete(
        Controller.deleteTeacher
);

router.route("/teachers/:id").get(
        Controller.getTeacherById
);


router.route("/teachers/supervisors").get(Controller.getAllClassSupervisors);


module.exports = router;