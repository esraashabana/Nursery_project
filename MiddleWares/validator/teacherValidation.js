const { body, param, query } = require("express-validator");
exports.insertArray = [
        body("id").isInt().withMessage("teacher Id should be integer !"),
        body("firstName").isString().withMessage("first name should be string").isLength({ min: 3 }).withMessage("first name must be at least 3 characters"),
        body("lastName").isString().withMessage("first name should be string").isLength({ min: 3 }).withMessage("first name must be at least 3 characters"),
        body("email").isEmail().withMessage("not valid email!")
        //validation on img &
];








