
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu_items').insert({name: 'TOKYO SALAD', restaurent_id: 1, price:13.99}),
        knex('menu_items').insert({name: 'ENDLESS SUMMER', restaurent_id: 1, price:15.99}),
        knex('menu_items').insert({name: 'TUSCAN SALAD', restaurent_id: 1, price:13.99}),
        knex('menu_items').insert({name: 'ASIAN SALAD', restaurent_id: 1, price:11.49}),
        knex('menu_items').insert({name: 'SUPERFOOD SALAD', restaurent_id: 1, price:14.99}),
        knex('menu_items').insert({name: 'THE FAVE', restaurent_id: 1, price:13.99}),
        knex('menu_items').insert({name: 'CAESAR SALAD', restaurent_id: 1, price:14.49}),
        knex('menu_items').insert({name: 'MEXI SALAD', restaurent_id: 1, price:14.99}),
        knex('menu_items').insert({name: 'CLASIC BURGER', restaurent_id: 2, price:11.00}),
        knex('menu_items').insert({name: 'THE DONATOR', restaurent_id: 2, price:13.00}),
        knex('menu_items').insert({name: 'BASIC BURGER', restaurent_id: 2, price:10.00}),
        knex('menu_items').insert({name: 'THE MAPLE CRISP', restaurent_id: 2, price:13.00}),
        knex('menu_items').insert({name: 'OH SO CRISPY BURGER', restaurent_id: 2, price:11.00}),
        knex('menu_items').insert({name: 'GOURMET BURGER', restaurent_id: 2, price:12.50}),
        knex('menu_items').insert({name: 'MUSHROOM MELT BURGER', restaurent_id: 2, price:13.00}),
        knex('menu_items').insert({name: 'SPICY CRISPY CRUNCH', restaurent_id: 2, price:12.50}),
      ]);
    });
};
