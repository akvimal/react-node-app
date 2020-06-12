exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('user_name',60).notNullable().unique();
        table.string('password');
        table.string('email',60).notNullable().unique();
        table.boolean('email_verified').defaultTo(false);
        table.string('email_code',12);
        table.string('phone',20);
        table.boolean('phone_verified').defaultTo(false);
        table.string('phone_code',12);
        table.boolean('agreed').defaultTo(false);
        table.string('auth_token');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
}
