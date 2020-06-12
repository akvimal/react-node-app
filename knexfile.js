// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {      
      database: process.env.DB_URL,
      user:     'macbook',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds'
    }
  }

};
