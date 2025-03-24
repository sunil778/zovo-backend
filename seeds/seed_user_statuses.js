/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("user_statuses")
    .del()
    .then(() => {
      return knex("user_statuses").insert([
        { id: 1, name: "Active" },
        { id: 2, name: "Inactive" },
        { id: 3, name: "Suspended" },
      ]);
    });
};
