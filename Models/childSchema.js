const mongoose = require("mongoose");

// Build child schema
const schema = new mongoose.Schema({
    id: Number,
    fullName: {
        firstName: String,
        lastName: String,
    },
    age: Number,
    level: {
        type: String,
        enum: ["PREKG", "KG", "KJ2"]
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        building: {
            type: String
        }
    }
});

// Register the schema with Mongoose and export it
module.exports = mongoose.model("Child", schema);
