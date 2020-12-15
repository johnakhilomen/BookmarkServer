// require & config dotenv package here inorder for CLI tools to populate env vars correctly.
require('dotenv').config();

// define connections
module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.db_test_host,
      port: process.env.db_test_port,
      database: process.env.db_test_name,
      user:     process.env.db_test_user,
      password: process.env.db_test_password
    },
    migrations: {
      directory: __dirname + '/.knex/migrations'
    },
    seeds: {
      directory: __dirname + '/.knex/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: process.env.db_dev_host,
      port: process.env.db_dev_port,
      database: process.env.db_dev_name,
      user:     process.env.db_dev_user,
      password: process.env.db_dev_password,
      ssl: true,
      sslfactory: "org.postgresql.ssl.NonValidatingFactory"
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.db_prod_host,
      port: process.env.db_prod_port,
      database: process.env.db_prod_name,
      user:     process.env.db_prod_user,
      password: process.env.db_prod_password
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }
};