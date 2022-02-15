import { NextFunction, Request, Response } from "express";

const knex = require("../database");

module.exports = {
  async index(req: Request, res: Response) {
    const results = await knex("usuarios");

    return res.json(results);
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
};
