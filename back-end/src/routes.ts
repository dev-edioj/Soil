import { Request, Response } from "express";

const express = require('express')
const knex = require('./database');

const routes = express.Router()

const UsuariosController = require('./controllers/UsuariosController')

routes.get('/usuarios', UsuariosController.index)



module.exports = routes;
