exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {prompt_text: 'How many wheels are there for a car?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'When is the India Independence?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'What is the real name of Gandhi?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'What is the room temperature?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'Who is the father of Java?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'Who is the PM of India during 2020?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'What the gas plants let out during night?', response_type: 'SINGLE_CHOICE'},
        {prompt_text: 'What are the colors the ocean?', response_type: 'MULTIPLE_CHOICE'},
        {prompt_text: 'Stars cannot be counted', response_type: 'TRUE_FALSE'},
        {prompt_text: 'Lion is carnivorus?', response_type: 'TRUE_FALSE'}
      ]);
    });
};
