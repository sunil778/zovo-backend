/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("industries").del(); // Clear existing records
  await knex("industries").insert([
    { name: "Technology" },
    { name: "Finance" },
    { name: "Healthcare" },
    { name: "Education" },
    { name: "Retail" },
  ]);
};
