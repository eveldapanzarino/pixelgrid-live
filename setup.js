const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Step 1: Installing npx globally...");
  execSync('npm install -g npx', { stdio: 'inherit' });

  console.log("\nStep 2: Creating Next.js app 'my-next-app'...");
  execSync('npx create-next-app@latest my-next-app --use-npm --yes', { stdio: 'inherit' });

  console.log("\nStep 3: Installing dependencies...");
  execSync('cd my-next-app && npm install', { stdio: 'inherit' });

  console.log("\nStep 4: Building the Next.js app...");
  execSync('cd my-next-app && npm run build', { stdio: 'inherit' });

  console.log("\nStep 5: Starting the Next.js app...");
  execSync('cd my-next-app && npm start', { stdio: 'inherit' });

} catch (error) {
  console.error("An error occurred during setup:", error);
}
