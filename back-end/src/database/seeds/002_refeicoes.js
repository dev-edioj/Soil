/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('refeicoes').del()
    .then(function(){
      return knex("refeicoes").insert([
        {
          usuario_id: 1,
          tipo_refeicao: "almoço"
        }
      ]);
  }) 
};
