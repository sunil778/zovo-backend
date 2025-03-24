exports.up = function (knex) {
  return knex.schema.createTable("companies", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").nullable();
    table.string("address").nullable();
    table.string("website").nullable();
    table
      .integer("industry_id")
      .unsigned()
      .references("id")
      .inTable("industries")
      .onDelete("SET NULL");
    table
      .integer("subscription_plan_id")
      .unsigned()
      .references("id")
      .inTable("subscription_plans")
      .onDelete("SET NULL");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("companies");
};
