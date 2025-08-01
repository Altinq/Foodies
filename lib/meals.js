import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  //   throw new Error("Database connection failed"); // Simulate an error

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true,
  });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to write image file");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals 
    (slug, title, summary, instructions, image, creator, creator_email)
   VALUES (@slug, @title, @summary, @instructions, @image, @creator, @creator_email)
    `
  ).run(meal);
}
