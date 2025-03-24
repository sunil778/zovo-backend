exports.up = function (knex) {
  return knex.schema.createTable("roles", (table) => {
    table.increments("id").primary(); // Ensure this is an INTEGER UNSIGNED
    table.string("name").unique().notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("roles");
};
