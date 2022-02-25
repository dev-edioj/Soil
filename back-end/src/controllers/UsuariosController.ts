import { NextFunction, Request, Response } from "express";

const knex = require("../database");

module.exports = {
  async index(req: Request, res: Response) {
    try {
      const results = await knex("usuarios");
      return res.status(201).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async showUsers(req: Request, res: Response) {
    try {
      const { login } = req.params;

      const results = await knex("usuarios").where({
        login: login,
      });
      return res.status(201).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async create(req: Request, res: Response) {
    try {
      const { login, email, senha } = req.body;

      await knex("usuarios").insert({
        login,
        email,
        senha,
      });
      return res.status(201).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { login, senha } = req.params;

      const resultsLogin = await knex("usuarios").where({
        login: login,
        senha: senha,
      });

      if (resultsLogin.length == 0) {
        return res
          .status(400)
          .send("Login ou senha inválido, por favor tente novamente.");
      }

      return res.json(resultsLogin);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { login, email, senha } = req.body;
      const { id } = req.params
      const resultsLogin= await knex("usuarios").update({ login, email, senha })
        .where({ id })
      
      return res.status(200).send();
      
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async delete(req: Request, res:Response) {
    try {
      const { id } = req.params;

        await knex("usuarios")
        .where({ id })
        .del();
      
      return res.status(200).send();
      
    } catch(error) {
      res.status(500).send(error);
    }
  }






};


