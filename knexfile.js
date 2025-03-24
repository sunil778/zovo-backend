/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "193.203.184.5", // Change if using a remote database
      user: "u952213875_zovo_pms",
      password: "mI2$K#obk&",
      database: "u952213875_zovo_pms",
      charset: "utf8mb4",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "193.203.184.5",
      user: "u952213875_zovo_pms",
      password: "mI2$K#obk&",
      database: "u952213875_zovo_pms",
      charset: "utf8mb4",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "193.203.184.5",
      user: "u952213875_zovo_pms",
      password: "mI2$K#obk&",
      database: "u952213875_zovo_pms",
      charset: "utf8mb4",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
