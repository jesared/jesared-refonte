/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const { spawn } = require("child_process");

const normalizeWindowsPath = (value) => (value.startsWith("\\\\?\\") ? value.slice(4) : value);

const projectRoot = normalizeWindowsPath(path.resolve(__dirname, ".."));
const nextBin = require.resolve("next/dist/bin/next");
const args = process.argv.slice(2);

const child = spawn(process.execPath, [nextBin, ...args], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
