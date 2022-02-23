import { Request, Response } from "express";

const express = require('express')
const knex = require('../database');


const routes = express.Router()

const UsuariosController = require('../controllers/UsuariosController')
const RefeicoesController = require("../controllers/RefeicoesController");

routes
    //Usuario
.get('/usuarios', UsuariosController.index)
.get("/usuarios/:login", UsuariosController.showUsers)
.get('/login/:login/:senha', UsuariosController.login)
.post('/usuarios', UsuariosController.create)

//Refeicoes

.get('/refeicoes', RefeicoesController.index)
.post('/refeicoes', RefeicoesController.create)
.put('/refeicoes', RefeicoesController.edit)

//Itens refeicoes





module.exports = routes;
