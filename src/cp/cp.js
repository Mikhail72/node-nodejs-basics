import { fork } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  // Write your code here

  const src = path.resolve(process.cwd(), "src", "cp", "files", "script.js");

  fork(src, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
