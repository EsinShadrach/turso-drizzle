"use server";

import { revalidatePath } from "next/cache";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { db, turso } from "~/db";
import { foo, user } from "~/drizzle/schema";

export async function getUserFromDb() {
  const result = await turso.execute("SELECT * FROM users");

  console.log(result);
  return result;
}

export async function getUsersViaORM() {
  const result = await db.select().from(user).all();
  return result;
}

export async function createrViaORM(body: FormData) {
  const name = body.get("name") as string;
  console.log("Creating user...");
  const res = await db.insert(user).values({ name }).execute();
  console.log(res);
  revalidatePath("/");
}
