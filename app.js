// const express = require("express");
import UsersController from "./users/users-controller.js";
import AuthenticationController from "./users/auth-controller.js";
import TuitsController from "./tuits/tuits-controller.js";
import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Guest:Guest@cluster0.kcmgz9i.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    credentials: true,
    origin: ["https://main--warm-cendol-deab82.netlify.app",
      "http://localhost:3000",
      "http://ergast.com/"
    ]
  })
);
app.use(
  session({
    secret: "any string",
    resave: false,
    proxy: true,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World how are you! I'm awesome");
});

app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

UsersController(app);
AuthenticationController(app);
TuitsController(app);

const port = process.env.PORT || 4000;
app.listen(4000);
console.log(`Running on port ${port}`);
