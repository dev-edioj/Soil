/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('refeicoes_itens', table => {
        table.increments('id').unique().primary().notNullable()
        table.enum('tipo_item', ['carboidrato', 'proteina', 'verdura']).notNullable()
        table.float('quantidade').notNullable()
        table.text('descricao').notNullable()
        


        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.integer('refeicoes_id')
        .references('refeicoes.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('usuarios');
