/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTableIfNotExists("review", (t) => {
          t.increments("id", {primaryKey: true});
          t.string("shopOrigin").notNullable();
          t.string("productId").notNullable();
          t.string("customer");
          t.string("email");
          t.string("title");
          t.string("body");
          t.string("rating");
          t.text("images");
          t.string("status");
          t.string("source");
          t.boolean("isPinned").defaultTo(false);
          t.timestamp("createdAt").defaultTo();
          t.text("reply");
          t.timestamp("repliedAt");
      })
      .createTableIfNotExists("request", (t) => {
          t.increments("id", {primaryKey: true});
          t.string("shopOrigin").notNullable();
          t.string("order").notNullable();
          t.string("type");
          t.string("status");
          t.timestamp("sentDate").defaultTo(knex.fn.now());
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists("review").dropSchemaIfExists("request");
  };
  