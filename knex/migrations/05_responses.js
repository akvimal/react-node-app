
exports.up = (knex, Promise) => {
  return knex.schema.createTable('responses', table => {
    table.increments('id');
    table.integer('user_id').notNullable();
    table.integer('assessment_id').notNullable();
    table.integer('question_id').notNullable();
    table.json('choices');
    table.string('text');
    table.string('file_path');
    table.boolean('pass');
    table.string('status');
    table.decimal('score',5,2);
    table.timestamp('start_at').defaultTo(knex.fn.now());
    table.timestamp('end_at');
    table.timestamp('review_at');
    table.integer('reviewer_id');
    table.foreign('user_id').references('users.id');
    table.foreign('reviewer_id').references('users.id');
    table.foreign('question_id').references('questions.id');
    table.foreign('assessment_id').references('assessments.id');
    table.unique(['user_id', 'question_id', 'assessment_id']);
  });
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('responses');
}