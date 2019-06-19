exports.up = function(knex, Promise) {
    return knex.schema.createTable('customers', function (table) {
      table.increments();
      table.string('username');
      table.string('password');
      table.integer("phone_number")
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customers');
  };
  