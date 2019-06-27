
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('city')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};


//form
//form puts data into state
