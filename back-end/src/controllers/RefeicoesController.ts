import { NextFunction, Request, Response } from "express";

const knex = require("../database");

module.exports = {
    async index(req: Request, res: Response) {
        try {
            const { usuario_id } = req.query;

            const query = knex("refeicoes");
            
            if (usuario_id) {
                query
                  .where({ usuario_id })
                  .join("usuarios", "usuarios.id", "=", "refeicoes.usuario_id")
                  .select("refeicoes.*", "usuarios.login");
            }

            const results = await query;

            return res.status(201).json(results);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
 
