
exports.up = (knex, Promise) => {
  return knex.schema.createTable('choices', table => {
    table.increments('id');
    table.integer('question_id').notNullable();
    table.string('key',12);
    table.string('value_text');
    table.string('value_image');
    table.boolean('valid');
    table.string('detail');
    table.foreign('question_id').references('questions.id');
  });
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('choices');
}