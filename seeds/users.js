
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Ross", city: 'Wellington'},
        {name: "Han", city: 'Auckland'},
        {name: "Aiko", city: 'Wellington'}
      ]);
    });
};
