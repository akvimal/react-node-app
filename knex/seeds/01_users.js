exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            {user_name: 'rahul@some.com', email: 'rahul@some.com'},
            {user_name: 'arun@some.com', email: 'arun@some.com'},
            {user_name: 'bab@some.com', email: 'babu@some.com'},
        ]);
      });
  };
  