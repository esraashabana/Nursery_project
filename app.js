require('dotenv').config();
const teacherRouter = require("./Routes/teacherRouter");
const classRouter = require("./Routes/classRouter");
const childRouter = require("./Routes/childRouter");
const changePassword=require("./Routes/changePassword");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require("express");//import
const server = express();//create server
const multer = require('multer');
const path = require('path');
const authentication=require("./Routes/authenticationRoute");
const authMiddleWare=require("./MiddleWares/authMW");

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'images/'); // Uploads will be stored in the "uploads" directory
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
      });
// Initialize multer middleware
const upload = multer({ storage: storage });
// Serve static files from the 'views' directory
server.use(express.static(path.join(__dirname, 'views')));
// Route to handle image upload
server.post('/upload', upload.single('image'), (req, res) => {
        // Here you can handle the uploaded file
        const file = req.file;
        if (!file) {
          return res.status(400).send('No file uploaded.');
        }
        res.send('File uploaded successfully.');
      });


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
            title: 'Nursery',
            description: 'An app for nursery with 3 roles',
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



server.use(authentication);
server.use(authMiddleWare);
server.use("/",changePassword);
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

