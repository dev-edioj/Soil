import { Request, Response } from "express";

const express = require('express')
const knex = require('../database');


const routes = express.Router()

const UsuariosController = require('../controllers/UsuariosController')


routes.get('/usuarios', UsuariosController.index)
routes.get("/usuarios/:login", UsuariosController.showUsers);
routes.post('/usuarios', UsuariosController.create)

routes.get('/login/:login/:senha', UsuariosController.login )



module.exports = routes;
