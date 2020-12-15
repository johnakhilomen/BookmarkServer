
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists("bookmarks", function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('url').notNullable();
        table.timestamp('rating');
        table.boolean('description').defaultTo(false);
        table.timestamp('date_created').defaultTo(knex.fn.now());
        table.timestamp('date_updated').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bookmarks");
};
