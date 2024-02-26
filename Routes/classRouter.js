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
 *                 $ref: './classSchema.json'
 *   post:
 *     description: Insert data into classes
 *     responses:
 *       201:
 *         description: Inserted data in classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './classSchema.json'
 *   put:
 *     description: Update classes
 *     responses:
 *       200:
 *         description: Updated classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './classSchema.json'
 *   delete:
 *     description: delete classes
 *     responses:
 *       200:
 *         description: delete classes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './classSchema.json'
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
/**
 * @swagger
 * /class/:id:
 *   get:
 *     description: Return class by id
 *     responses:
 *       200:
 *         description: Return class by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './classSchema.json'
 */

router.route("/class/:id").get(
        cotroller.getClassById
);
/**
 * @swagger
 * /class/child/:id:
 *   get:
 *     description: Return child in class by id
 *     responses:
 *       200:
 *         description: Return child class by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './classSchema.json'
 */

router.route("/class/child/:id").get(
        cotroller.getClassChildren
);
/**
 * @swagger
 * /class/teacher/:id:
 *   get:
 *     description: Return teacher in class by id
 *     responses:
 *       200:
 *         description: Return teacher in class by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './classSchema.json'
 */

router.route("/class/teacher/:id").get(
        cotroller.getClassSupervisor
);

module.exports=router;