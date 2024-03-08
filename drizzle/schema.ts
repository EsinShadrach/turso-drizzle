import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const foo = sqliteTable("foo", {
  bar: text("bar").notNull().default("Hey!"),
});

export const user = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});
