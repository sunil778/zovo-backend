/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("subscription_plans")
    .del()
    .then(() => {
      return knex("subscription_plans").insert([
        { id: 1, name: "Basic", price: 9.99, duration_days: 30 },
        { id: 2, name: "Pro", price: 19.99, duration_days: 90 },
        { id: 3, name: "Enterprise", price: 49.99, duration_days: 365 },
      ]);
    });
};
