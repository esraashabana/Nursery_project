/**
 * @swagger
 * /class:
 *   get:
 *     description: Returns a list of classes
 *     responses:
 *       200:
 *         description: A list of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Models/classSchema.json'
 *   post:
 *     description: Insert data into classes
 *     responses:
 *       201:
 *         description: Inserted data in classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 *   put:
 *     description: Update classes
 *     responses:
 *       200:
 *         description: Updated classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 * put:
 *     description: delete classes
 *     responses:
 *       200:
 *         description: delete classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 */

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