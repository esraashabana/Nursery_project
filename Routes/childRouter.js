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
 *                 $ref: './childSchema.json'
 *   post:
 *     description: Insert data into child
 *     responses:
 *       201:
 *         description: Inserted data in child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './childSchema.json'
 *   put:
 *     description: Update child
 *     responses:
 *       200:
 *         description: Updated child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './childSchema.json'
 *   delete:
 *     description: delete child
 *     responses:
 *       200:
 *         description: delete child
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './childSchema.json'
 */
const express=require("express");
const cotroller=require("./../Controllers/childController");
const validation=require("./../MiddleWares/validator/childValidation");
const validator=require("./../MiddleWares/validationMW");
const {isAdmin,isTeacher}=require("./../MiddleWares/authMW");
const router=express.Router();

router.route("/child").get(
        isAdmin,isTeacher,
        cotroller.getAllChildren
).post(
        isAdmin,
        validation.insertArray,validator,
        cotroller.addChild
).put(
        isAdmin,
        validation.insertArray,validator,
        cotroller.updateChild
).delete(
        isAdmin,
        cotroller.deleteChild
);

/**
 * @swagger
 * /child/:id:
 *   get:
 *     description: return specific child
 *     responses:
 *       200:
 *         description: specific child
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './childSchema.json'
 * */
router.route("/child/:id").get(
        cotroller.getChildById
);


module.exports=router;