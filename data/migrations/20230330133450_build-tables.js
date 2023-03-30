/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema

    .createTable("projects", table => {
        table.increments("project_id");
        table.string("project_name")
            .notNullable();
        table.string("description")
        table.integer("project_completed")
            .defaultTo(0);
    })

    .createTable("resources", table => {
        table.increments("resource_id");
        table.string("resource_name")
            .notNullable()
            .unique();
        table.string("resource_description");
    })

    .createTable("tasks", table => {
        table.increments("task_id")
    })

    .createTable("project_resources", table => {
        table.increments("project_resource_id")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};
