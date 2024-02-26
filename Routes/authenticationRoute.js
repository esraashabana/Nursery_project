const express=require("express");
const authenticationController=require("./../Controllers/authentication");
const route=express.Router();
route.post("/login",authenticationController.login);
module.exports=route;
