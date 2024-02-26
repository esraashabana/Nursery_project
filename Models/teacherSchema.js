const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    id: Number,
    fullName: {
        firstName: String,
        lastName: String,
    },
    password: {
        type: String,
        required: true
    },
    email: String,
    image: String
});

// Hash password before saving using bycrypt ..
schema.pre('save', async function(next) {
    const teacher = this;
    if (!teacher.isModified('password')) {
        return next();
    }
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(teacher.password, saltRounds);
        teacher.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("teachers", schema);