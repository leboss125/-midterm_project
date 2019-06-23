
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('restaurents').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('restaurents').insert({name: "MANDY'S", phone_number:5146707820, address:'201 LAURIER OUEST', image:'https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "CHEF ON CALL", phone_number:5148442044, address:'3430 PARC AVENUE', image:'https://images.deliveryhero.io/image/fd-ca/LH/s7ey-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "LE BAY CÀ PHÊ", phone_number:5145501283, address:'5263 BOULEVARD SAINT-LAURENT', image:'https://images.deliveryhero.io/image/fd-ca/LH/s0oy-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "BURGER DE VILLE", phone_number:5145075050, address:'5282 BOULEVARD SAINT-LAURENT', image:'https://images.deliveryhero.io/image/fd-ca/LH/s1nq-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "CARIBOU GOURMAND", phone_number:4383876677, address:'5308 BOULEVARD ST LAURENT', image:'https://images.deliveryhero.io/image/fd-ca/LH/s6gu-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "PIZZERIA MAGPIE", phone_number:5145072900, address:'16 RUE MAGUIRE', image:'https://images.deliveryhero.io/image/fd-ca/LH/s3xg-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "BOB POULET NINJA", phone_number:5145075050, address:'5282 BOULEVARD ST LAURENT', image:'https://images.deliveryhero.io/image/fd-ca/LH/s3fv-listing.jpg?width=800&height=584'}),
          knex('restaurents').insert({name: "FRANCIS'S CHICKEN", phone_number:5148449999, address:'5455 Gaspe Avenue', image:'https://images.deliveryhero.io/image/fd-ca/LH/s3fv-listing.jpg?width=800&height=584'}),
        ]);
      });
  };
  