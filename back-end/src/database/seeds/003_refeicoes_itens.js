/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed =  function(knex) {
 
  return knex('refeicoes_itens').del()
    .then(function () {
    return knex("refeicoes_itens").insert([
      {
        refeicoes_id: 5,
        tipo_item: "carboidrato",
        quantidade: "100",
        descricao: "Arroz branco cozido"
      },
    ]);
  })
  
};
