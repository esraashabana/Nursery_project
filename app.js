require('dotenv').config();
const teacherRouter = require("./Routes/teacherRouter");
const classRouter = require("./Routes/classRouter");
const childRouter = require("./Routes/childRouter");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require("express");//import
const server = express();//create server
//i use bcrypt for password encryption
const port = process.env.PORT || 8080;
mongoose.connect(process.env.DB_URL)
        .then(() => {
                console.log("Connected to the database");
                server.listen(port, () => {
                        console.log("Server is running on port", port);
                });
        })
        .catch((error) => {
                console.log("Error connecting to the database", error);
        });

//middlewares
//to determine which allowed
const corsOptions = {
        origin: '*',
        methods: '*',
        allowedHeaders: ['Content-Type', 'Authorization'],
};
const options = {
        definition: {
          openapi: '3.0.0',
          info: {
            title: 'Your API Name',
            description: 'Description of your API',
            version: '1.0.0',
          },
        },
        // Specify the paths to your route files containing Swagger annotations
        apis: ['./Routes/*.js'],
      };
      
      const specs = swaggerJsdoc(options);
      
server.use(cors(corsOptions));
//first
server.use((req, res, next) => {
        //the reson of load is not writing response 
        //without this it will be in endless load.
        //but if i write it here it will not pass to the next mw.
        //so i need next();
        //500 error , 404 not found , 200 found ,201 add, validation 422
        if (false) {
                throw new Error("hjkjhvcvbn");
        } else {
                next();
        }


});
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
//app.get,app.post
server.use(bodyParser.json());//express.json
server.use(bodyParser.urlencoded({ extended: false }));
server.use(teacherRouter);
server.use(classRouter);
server.use(childRouter);










//not found 
server.use((req, res) => {
        res.status(404).json({ data: "not foundd" });

});

//error middleware
server.use((error, req, res, next) => {
        let status = error.status || 500;
        res.status(status).json({ data: error + "" });
});