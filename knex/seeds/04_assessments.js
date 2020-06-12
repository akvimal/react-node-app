exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assessments').insert([
        {questions: JSON.stringify([1,2,3,4,5,6,7,8,9,10])}
      ]);
    });
};
