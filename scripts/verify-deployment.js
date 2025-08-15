#!/usr/bin/env node

import fs from "fs";
import path from "path";

console.log("🔍 Verifying Deployment Configuration...\n");

const checks = [
  {
    name: "GitHub Actions Workflow",
    check: () => fs.existsSync(".github/workflows/deploy.yml"),
    fix: "Workflow file exists ✅",
  },
  {
    name: "Build Output Directory",
    check: () => fs.existsSync("dist/spa"),
    fix: "Run: pnpm build:client",
  },
  {
    name: "SPA Routing Files",
    check: () => fs.existsSync("public/404.html"),
    fix: "SPA routing configured ✅",
  },
  {
    name: "Package Manager Lock File",
    check: () => fs.existsSync("pnpm-lock.yaml"),
    fix: "pnpm-lock.yaml exists ✅",
  },
  {
    name: "Vite Configuration",
    check: () => {
      const config = fs.readFileSync("vite.config.ts", "utf8");
      return config.includes("/UpKraft_Assignment/");
    },
    fix: "Base path correctly set to /UpKraft_Assignment/ ✅",
  },
];

let allPassed = true;

checks.forEach(({ name, check, fix }) => {
  const passed = check();
  console.log(`${passed ? "✅" : "❌"} ${name}: ${passed ? fix : "FAILED"}`);
  if (!passed) allPassed = false;
});

console.log("\n" + "=".repeat(50));
console.log(
  allPassed
    ? "🎉 All checks passed! Ready to deploy."
    : "⚠️  Some checks failed. Fix issues above.",
);
console.log("=".repeat(50));

if (allPassed) {
  console.log("\n📋 Next Steps:");
  console.log(
    '1. Commit and push changes: git add . && git commit -m "Deploy" && git push',
  );
  console.log(
    "2. Enable GitHub Pages: Settings → Pages → Source: GitHub Actions",
  );
  console.log("3. Visit: https://sujal-02.github.io/UpKraft_Assignment/");
}
