const mongoose = require("mongoose");
//build class schema
const schema = new mongoose.Schema({
        id: Number,
        name: String,
        supervisor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: teachers
        },
        //carry array of children ids
        children: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: Child
        }
        ]


});

//bind with moongoose
module.exports=mongoose.model("classes", schema);