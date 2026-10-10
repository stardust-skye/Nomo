const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const resultsFile = path.join(root, "test-results", "results.xml");
const results = fs.readFileSync(resultsFile, "utf8");
const suites = [...results.matchAll(/<testsuite\b[^>]*>/g)].map(match => match[0]);
const value = (tag, name) => Number(tag.match(new RegExp(`${name}="(\\d+)"`))?.[1] || 0);
const total = suites.reduce((n, tag) => n + value(tag, "tests"), 0);
const failures = suites.reduce((n, tag) => n + value(tag, "failures"), 0);
const skipped = suites.reduce((n, tag) => n + value(tag, "skipped"), 0);
const passed = total - failures - skipped;

let functions = 0;
let coveredFunctions = 0;
for (const file of fs.readdirSync(path.join(root, "test-results"), { recursive: true })) {
  if (!file.endsWith("v8-coverage.json")) continue;
  const entries = JSON.parse(fs.readFileSync(path.join(root, "test-results", file), "utf8"));
  for (const entry of entries) {
    if (!entry.url.endsWith("/js/app.js")) continue;
    for (const fn of entry.functions || []) {
      functions += 1;
      if ((fn.ranges || []).some(range => range.count > 0)) coveredFunctions += 1;
    }
  }
}
const coverage = functions ? Math.round((coveredFunctions / functions) * 100) : 0;
const output = {
  schemaVersion: 1,
  label: "tests",
  message: `${passed}/${total} passed`,
  color: failures ? "red" : "brightgreen",
  total,
  passed,
  failed: failures,
  skipped,
  coverage,
  generatedAt: new Date().toISOString()
};
const coverageBadge = {
  schemaVersion: 1,
  label: "JS coverage",
  message: `${coverage}%`,
  color: coverage >= 80 ? "brightgreen" : coverage >= 60 ? "yellow" : "red"
};
fs.writeFileSync(path.join(root, "test-results", "ci-summary.json"), `${JSON.stringify(output, null, 2)}\n`);
fs.writeFileSync(path.join(root, "test-results", "ci-tests.json"), `${JSON.stringify(output, null, 2)}\n`);
fs.writeFileSync(path.join(root, "test-results", "ci-coverage.json"), `${JSON.stringify(coverageBadge, null, 2)}\n`);
console.log(`Tests: ${passed}/${total} passed; JavaScript function coverage: ${coverage}%`);
