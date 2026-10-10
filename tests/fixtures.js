const base = require("@playwright/test");
const fs = require("fs");

const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    const session = await page.context().newCDPSession(page);
    await session.send("Profiler.enable");
    await session.send("Profiler.startPreciseCoverage", {
      callCount: true,
      detailed: true
    });

    await use(page);

    const coverage = await session.send("Profiler.takePreciseCoverage");
    fs.mkdirSync(testInfo.outputDir, { recursive: true });
    fs.writeFileSync(
      testInfo.outputPath("v8-coverage.json"),
      JSON.stringify(coverage.result)
    );
    await session.send("Profiler.stopPreciseCoverage");
    await session.detach();
  }
});

module.exports = { test, expect: base.expect };
