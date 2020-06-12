exports.up = (knex, Promise) => {
  return knex.schema.createTable('questions', table => {
    table.increments('id');
    table.string('prompt_text');
    table.string('prompt_image');
    table.string('response_type',30);
    table.string('status',10).defaultTo('NEW');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('questions');
}