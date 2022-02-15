/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('refeicoes', table => {
        table.increments('id').unique().primary().notNullable()
        table.enum('tipo_refeicao', ['cafe da manha', 'almoço', 'cafe da tarde', 'janta/ceia',]).unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.integer('usuario_id')
        .references('usuarios.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('usuarios');

