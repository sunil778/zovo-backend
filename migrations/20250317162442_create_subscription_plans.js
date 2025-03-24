/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("subscription_plans", (table) => {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("duration_days").notNullable(); // Duration in days
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("subscription_plans");
};
