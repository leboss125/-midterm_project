
exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function (table) {
        table.increments();
        table.integer('customer_id');
        table.integer('restaurent_id');
        table.text('items');
        table.integer('total_price')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('status')
        table.integer('time_to_complite')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
// generate  knex migrate:make menuitemsdb
// run migration:  knex migrate:latest --env development
//rollback  knex migrate:rollback