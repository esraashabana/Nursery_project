/**
 * @swagger
 * /child:
 *   get:
 *     description: Returns a list of child
 *     responses:
 *       200:
 *         description: A list of child
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './../Models/childSchema.json'
 *   post:
 *     description: Insert data into child
 *     responses:
 *       201:
 *         description: Inserted data in child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/childSchema.json'
 *   put:
 *     description: Update child
 *     responses:
 *       200:
 *         description: Updated child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/childSchema.json'
 * put:
 *     description: delete child
 *     responses:
 *       200:
 *         description: delete child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/childSchema.json'
 */
const express=require("express");
const cotroller=require("./../Controllers/childController");
const validation=require("./../MiddleWares/validator/childValidation");
const validator=require("./../MiddleWares/validationMW");
const router=express.Router();

router.route("/child").get(
        cotroller.getAllChildren
).post(
        validation.insertArray,validator,
        cotroller.addChild
).put(
        validation.insertArray,validator,
        cotroller.updateChild
).delete(
        cotroller.deleteChild
);
router.route("/child/:id").get(
        cotroller.getChildById
);


module.exports=router;