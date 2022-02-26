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
      }

      return res.status(201).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async create(req: Request, res: Response) {
    try {
      const { tipo_refeicao, usuario_id, itens } = req.body;

      const refeicoes_id = await knex("refeicoes")
        .insert({
          tipo_refeicao,
          usuario_id,
        })
        .returning("id");


      for (let item of itens) {
        await knex("refeicoes_itens").insert({
          refeicoes_id: refeicoes_id[0].id,
          tipo_item: item.tipo_item,
          quantidade: item.quantidade,
          descricao: item.descricao,
        });
      }

      return res.status(201).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { tipo_refeicao, usuario_id, itens } = req.body;
      const { id } = req.params;

      await knex("refeicoes").update({
        tipo_refeicao,
        usuario_id,
      }).where({ id });

      for (let item of itens) {
        await knex("refeicoes_itens").update({
          tipo_item: item.tipo_item,
          quantidade: item.quantidade,
          descricao: item.descricao,
        }).where({ refeicoes_id:id, id:item.id });
      }
      return res.status(201).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await knex("refeicoes")
        .where({ id }).del();

      return res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
