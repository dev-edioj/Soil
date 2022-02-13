/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {

  return knex('usuarios').del()
    .then(function () {
      return knex('usuarios').insert([
        {login: 'edio', email:'junioedio.r@gmail.com', senha:'1010'}
    ]);
  });
};
