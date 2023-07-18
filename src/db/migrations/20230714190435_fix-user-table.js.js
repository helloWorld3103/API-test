/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.string('email').notNullable();
        table.string('password').notNullable().alter();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('email');
        table.integer('password').notNullable().alter();
      });

};
