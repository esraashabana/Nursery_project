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
 *                 $ref: './teacherSchema.js'
 *   post:
 *     description: Insert data into teacher
 *     responses:
 *       201:
 *         description: Inserted data in teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './teacherSchema.json'
 *   put:
 *     description: Update teacher
 *     responses:
 *       200:
 *         description: Updated teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './teacherSchema.json'
 *   delete:
 *     description: delete teacher
 *     responses:
 *       200:
 *         description: delete teacher
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './teacherSchema.json'
 */

const express = require("express");
const Controller = require("./../Controllers/teacherController");
const mwValidation = require("./../MiddleWares/validationMW");
const teacherValidation = require("./../MiddleWares/validator/teacherValidation");
const router = express.Router();
const {isAdmin,isTeacher}=require("./../MiddleWares/authMW");
const uploadImg=require("./../MiddleWares/uploadImage");
router.route("/teachers").get(
        isTeacher,
        Controller.getAllTeachers
).post(
        isAdmin,
        uploadImg.single('image'),  teacherValidation.insertArray, mwValidation,
        Controller.addTeacher
).put(
        isTeacher,
        teacherValidation.insertArray, mwValidation,
        Controller.updateTeacher

).delete(
        isTeacher,
        Controller.deleteTeacher
);

/**
 * @swagger
 * /teachers/:id:
 *   get:
 *     description: Return teacher by id
 *     responses:
 *       200:
 *         description: Return teacher by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './teacherSchema.json'
 */

router.route("/teachers/:id").get(
        Controller.getTeacherById
);

/**
 * @swagger
 * /teachers/supervisors:
 *   get:
 *     description: Return supervisors
 *     responses:
 *       200:
 *         description: Return supervisors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './teacherSchema.json'
 */

router.route("/teachers/supervisors").get(Controller.getAllClassSupervisors);


module.exports = router;