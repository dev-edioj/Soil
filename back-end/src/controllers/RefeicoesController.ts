import { NextFunction, Request, Response } from "express";

const knex = require("../database");

module.exports = {
  async index(req: Request, res: Response) {
    try {
      const { usuario_id } = req.query;

      let query = knex("refeicoes");

      if (usuario_id) {
        query
          .where({ usuario_id })
          .join("usuarios", "usuarios.id", "=", "refeicoes.usuario_id")
          .select("refeicoes.*", "usuarios.login");
      }

        const results = await query; //recebe refeições
        
        for (let refeicao of results) {
            
            query = knex("refeicoes_itens");

            query.where({ refeicoes_id: refeicao.id }); 

            refeicao.itens = await query;
                
        };

      return res.status(201).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { tipo_refeicao, usuario_id } = req.body;

      await knex("refeicoes").insert({
        tipo_refeicao,
        usuario_id,
      
      });
      return res.status(201).send();
    } catch (error) {
      res.status(500).send(error);
    }
    },
    async edit(req: Request, res: Response) {
        try {
            const { tipo_refeicao, usuario_id } = req.body;

            await knex("refeicoes").insert({
                tipo_refeicao,
                usuario_id,
      
            });
            return res.status(201).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
};
 
