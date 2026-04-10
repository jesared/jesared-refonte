/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");

const fallbackRoot = path.dirname(process.env.npm_package_json || path.join(process.cwd(), "package.json"));
const runner = path.join(fallbackRoot, "scripts", "next-runner.cjs");
const command = process.argv[2] || process.env.npm_lifecycle_event || "dev";

process.argv = ["node", runner, command];
require(runner);
