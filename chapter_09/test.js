// // Playwright Result Summary Generator
// // You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

// // Examples:
// // Input:
// // results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]
// // Output:
// // Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form
// // 💡 Explanation:The function loops through the array, counts each status, adds durations, and collects failed step names.


 let results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];
// function generateSummary(results) {
//   let totalSteps = results.length;
//   let passed = 0;
//   let failed = 0;
//   let skipped = 0;
//   let totalDuration = 0;
//   let failedSteps = [];

//   for (let step of results) {
//     totalDuration += step.durationMs;

//     if (step.status === "passed") {
//       passed++;
//     } else if (step.status === "failed") {
//       failed++;
//       failedSteps.push(step.name);
//     } else if (step.status === "skipped") {
//       skipped++;
//     }
//   }

//   console.log(
//     `Total Steps: ${totalSteps} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Total Duration: ${totalDuration}ms Failed Steps: ${failedSteps.join(", ")}`
//   );
// }
// generateSummary(results);


//2. 
 function buildTestUsers(names, roles) {
  let users = [];

  for (let i = 0; i < names.length; i++) {
    let username = names[i].toLowerCase().replace(" ", "_");
    let email = username + "@playwrightbatch.com";

    users.push({
      username: username,
      email: email,
      role: roles[i]
    });
  }

  return users;
}


let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

console.log(buildTestUsers(names, roles));