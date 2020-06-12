
exports.up = (knex, Promise) => {
  return knex.schema.createTable('assessment_sessions', table => {
    table.increments('id');
    table.integer('assessment_id');
    table.timestamp('planned_dt').defaultTo(knex.fn.now());
    table.string('status');
    table.string('questions_mode');
    //1. static (questions are fixed) or 
    //2. dynamic (topics are fixed, but different question)
    //3. adaptive (dynamic and complexity varies based on user response)
    table.boolean('moderator_driven').defaultTo(false); 
    //dynamic questions are not applicable
    table.integer('created_by');
    table.timestamp('created_at');
    //moderator driven (next question will be initiated by moderator)
    //individual or group
    table.string('questions_order'); //not applicable for static and adaptive mode
    //1. topics
    //2. complexity
    table.json('questions');
    //populated ahead of start, for static mode
    //populated during session by system, based on topics, for dynamic mode
    //not applicable for adaptive mode
  });
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assessment_sessions');
}