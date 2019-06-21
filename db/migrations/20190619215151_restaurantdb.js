
exports.up = function(knex, Promise) {
    return knex.schema.createTable('restaurents', function (table) {
        table.increments();
        table.string('name');
        table.bigInteger('phone_number');
        table.string('address')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('restaurents');
};
