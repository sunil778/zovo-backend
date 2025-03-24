/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("roles")
    .del()
    .then(() => {
      return knex("roles").insert([
        { id: 1, name: "Admin" },
        { id: 2, name: "Company Owner" },
        { id: 3, name: "Employee" },
      ]);
    });
};
