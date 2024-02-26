const jwt = require("jsonwebtoken");
const teacher= require("./../Models/teacherSchema");
require("dotenv").config();

exports.login = (req, res, next) => {
  let token;
  //check for admin
  if (
    req.body.username == "admin" &&
    req.body.password == process.env.Admin_passord
  ) {
    // generate token
    token = jwt.sign(
      { role: "admin", username: "admin" },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "loged in correctly", token });
  } else {
    Teachers.findOne({username: req.body.username,password: req.body.password})
      .then((data) => {
        if (data == null) next(new Error("not authntcated"));
        token = jwt.sign(
          { role: "teacher", username: data.username, id: data._id },
          process.env.secret_key,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({ message: "loged in", token });
      })
      .catch((err) => next(err));
  }
};