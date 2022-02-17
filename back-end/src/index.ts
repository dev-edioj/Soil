import { NextFunction, Request, Response } from "express";

const express = require("express");

const routes = require("./config/routes");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen("3333", () => console.log("running back-end"));

