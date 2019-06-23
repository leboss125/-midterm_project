
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('menu_items').insert({name: 'TOKYO SALAD', restaurent_id: 1, price:13.99, description:'romaine lettuce, mixed greens, shredded carrots, broccoli, cucumber, avocado, purple cabbage, toasted sesame seeds, tamari citrus tofu'}),
        knex('menu_items').insert({name: 'ENDLESS SUMMER', restaurent_id: 1, price:15.99, description: 'romaine lettuce, mixed greens, kale, quinoa, shredded carrots, cucumber, avocado, tempura onions, pomegranate seeds, sesame seeds, cilantro, basil, tamari mock chicken'}),
        knex('menu_items').insert({name: 'TUSCAN SALAD', restaurent_id: 1, price:13.99, description:'romaine lettuce, mixed greens, basil, broccoli, cherry tomatoes, kalamata olives, red onion, baked pita chips'}),
        knex('menu_items').insert({name: 'ASIAN SALAD', restaurent_id: 1, price:11.49, description:'romaine lettuce, mixed greens, avocado, mandarin oranges, cherry tomatoes, shredded carrots, crunchy noodles, toasted sesame seeds'}),
        knex('menu_items').insert({name: 'SUPERFOOD SALAD', restaurent_id: 1, price:14.99, description:'baby spinach, kale, arugula, quinoa, mint, parsley, avocado, broccoli, cherry tomatoes, roasted sweet potato, pomegranate seeds, apples'}),
        knex('menu_items').insert({name: 'THE FAVE', restaurent_id: 1, price:13.99, description:'romaine lettuce, arugula, shredded carrots, corn, broccoli, avocado, baked pita chips, sunflower seeds, shaved parmesan'}),
        knex('menu_items').insert({name: 'CAESAR SALAD', restaurent_id: 1, price:14.49, description:'kale, romaine lettuce, baked pita chips, mozzarella, shaved parmesan, bacon, free run hard boiled egg'}),
        knex('menu_items').insert({name: 'MEXI SALAD', restaurent_id: 1, price:14.99, description:'romaine lettuce, mixed greens, cilantro, corn, black beans, avocado, cherry tomatoes, shredded carrots, tortilla chips, cheddar'}),
        knex('menu_items').insert({name: 'CLASIC BURGER', restaurent_id: 2, price:11.00, description:'1/3 pound patty topped with ice berg lettuce, melted american cheese, with pickles, ketchup, mustard, and relish'}),
        knex('menu_items').insert({name: 'THE DONATOR', restaurent_id: 2, price:13.00, description:'crispy hand breaded chicken crisper patty topped with Kimchi, sliced cucumber, mixed greens, julienne carrots, melted Monterey Jack cheese, and a sriracha mayo spread'}),
        knex('menu_items').insert({name: 'BASIC BURGER', restaurent_id: 2, price:10.00, description: '1/3 pound beef patty with mixed greens, ketchup, mustard and a garlic mayo spread'}),
        knex('menu_items').insert({name: 'THE MAPLE CRISP', restaurent_id: 2, price:13.00, description: 'crispy hand breaded chicken patty dipped in 100% pure maple syrup topped with crunchy ice berg lettuce, fried onions, crispy bacon, and melted American cheese'}),
        knex('menu_items').insert({name: 'OH SO CRISPY BURGER', restaurent_id: 2, price:11.00, description:'crispy hand breaded chicken breast burger, served with iceberg lettuce, sliced tomatoes and Chef On Call sauce'}),
        knex('menu_items').insert({name: 'GOURMET BURGER', restaurent_id: 2, price:12.50, description:'1/3 pound beef patty, with melted Monterey Jack cheese, caramelized onions, crispy bacon, mixed greens and roasted garlic mayonnaise spread'}),
        knex('menu_items').insert({name: 'MUSHROOM MELT BURGER', restaurent_id: 2, price:13.00, description:'1/3 pound beef patty, with melted mozzarella cheese, sauteed mushrooms, crispy bacon, ice berg lettuce, BBQ sauce and our roasted garlic mayonnaise'}),
        knex('menu_items').insert({name: 'SPICY CRISPY CRUNCH', restaurent_id: 2, price:12.50, description:'crispy hand breaded chicken breast burger, with iceberg lettuce, melted Monterey Jack cheese, banana pepper, crispy bacon slices, and our homemade spicy mayo spread'}),
      ]);
    });
};
