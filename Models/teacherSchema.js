const mongoose = require("mongoose");

const schema = new mongoose.Schema({
        id: Number,
        fullName: {
                firstName: String,
                lastName: String,
        },
        password: String,
        email: String,
        image: String
});

module.exports = mongoose.model("teachers", schema);
