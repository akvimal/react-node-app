
exports.up = (knex, Promise) => {
  return knex.schema.createTable('assessments', table => {
    table.increments('id');
    table.integer('duration');
    table.integer('pass_score');
    table.string('status');
    table.integer('created_by');
    table.timestamp('created_at');
    table.json('topics');//[{name:"algebra",questions:[{level:"simple",count:5}]]
    table.json('questions');
  });
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('assessments');
}