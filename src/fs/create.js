import fs from "node:fs/promises";
import path from "node:path";

//create.js - implement function that creates new file fresh.txt
// with content I am fresh and young inside of the files folder
// (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
  // Write your code here
  const src = path.resolve(process.cwd(), "src", "fs", "files", "fresh.txt");

  try {
    await fs.writeFile(src, "I am fresh and young inside", {
      encoding: "utf-8",
      flag: "wx",
    });
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

await create();
