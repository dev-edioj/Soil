import { Request, Response } from "express";

const knex = require('../database')

module.exports = {
    async index(req: Request, res: Response) {
        const results = await knex('usuarios')

        return res.json(results);
    }
}
