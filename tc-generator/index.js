const { generateTestCases } = require('./watsonx');

(async () => {
  const story = "As a user, I want to log in using email and password so I can access my dashboard.";

  try {
    const output = await generateTestCases(story);
    console.log("\n✅ AI-Generated Test Cases:\n", output);
  } catch (error) {
    console.error("❌ Failed to generate test cases:", error);
  }
})();
