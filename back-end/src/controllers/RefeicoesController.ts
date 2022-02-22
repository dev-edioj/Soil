import { NextFunction, Request, Response } from "express";

const knex = require("../database");

module.exports = {
    async index(req: Request, res: Response) {
        try {
            const results = await knex("refeicoes");
            return res.status(201).json(results);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
 
