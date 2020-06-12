exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('choices').del()
    .then(function () {
      // Inserts seed entries
      return knex('choices').insert([
        {question_id: 1, key: '1', value_text: 'Three', valid: false},
        {question_id: 1, key: '2', value_text: 'Two', valid: false},
        {question_id: 1, key: '3', value_text: 'Four', valid: true},
        {question_id: 1, key: '4', value_text: 'Six', valid: false},
        {question_id: 2, key: '1', value_text: '08th Jun 1060', valid: false},
        {question_id: 2, key: '2', value_text: '15th Aug 1945', valid: true},
        {question_id: 2, key: '3', value_text: '26th Jan 1950', valid: false},
        {question_id: 2, key: '4', value_text: '01st May 1942', valid: false},
        {question_id: 3, key: '1', value_text: 'Lal', valid: false},
        {question_id: 3, key: '2', value_text: 'Mohandas', valid: true},
        {question_id: 3, key: '3', value_text: 'Something', valid: false},
        {question_id: 3, key: '4', value_text: 'Hello there', valid: false},
        {question_id: 4, key: '1', value_text: '35 C', valid: false},
        {question_id: 4, key: '2', value_text: '40 C', valid: false},
        {question_id: 4, key: '3', value_text: '25 C', valid: false},
        {question_id: 4, key: '4', value_text: '32 C', valid: true},
        {question_id: 5, key: '1', value_text: 'Mark', valid: false},
        {question_id: 5, key: '2', value_text: 'James', valid: true},
        {question_id: 5, key: '3', value_text: 'Mashall', valid: false},
        {question_id: 5, key: '4', value_text: 'Einsten', valid: false},
        {question_id: 6, key: '1', value_text: 'VP Singh', valid: false},
        {question_id: 6, key: '2', value_text: 'Rajiv', valid: false},
        {question_id: 6, key: '3', value_text: 'Sonia', valid: false},
        {question_id: 6, key: '4', value_text: 'Modi', valid: true},
        {question_id: 7, key: '1', value_text: 'CO', valid: false},
        {question_id: 7, key: '2', value_text: 'CO2', valid: true},
        {question_id: 7, key: '3', value_text: 'O2', valid: false},
        {question_id: 7, key: '4', value_text: 'N', valid: false},
        {question_id: 8, key: '1', value_text: 'Green', valid: true},
        {question_id: 8, key: '2', value_text: 'Yellow', valid: false},
        {question_id: 8, key: '3', value_text: 'Pink', valid: false},
        {question_id: 8, key: '4', value_text: 'Blue', valid: true},
        {question_id: 9, key: '1', value_text: 'True', valid: true},
        {question_id: 9, key: '2', value_text: 'False', valid: false},
        {question_id: 10, key: '1', value_text: 'True', valid: true},
        {question_id: 10, key: '2', value_text: 'False', valid: false}
      ]);
    });
};
