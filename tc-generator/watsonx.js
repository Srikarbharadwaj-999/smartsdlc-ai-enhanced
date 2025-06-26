import https from 'https';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); 

const apiKey = process.env.GENAI_API_KEY || "4zc7jGzNQnROHWiotA5-n58YSPmLFI47jSzw-QrJCR1q";

// ✅ Watsonx API endpoint for eu-de region
const url = "https://eu-de.ml.cloud.ibm.com/v2/text/generation";

export async function generateTestCases(story = "As a user, I want to log in securely") {
  try {
    const agent = new https.Agent({ rejectUnauthorized: false });

    const response = await axios.post(
      url,
      {
        model_id: "ibm/granite-13b-chat",
        input: `Generate test cases for the following story:\n${story}`,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
      }
    );

    console.log("✅ Watsonx Test Cases:\n", response.data);
  } catch (err) {
    console.error("❌ Watsonx API Error:", err.message);
  }
}

// ✅ Automatically run if script is directly executed
if (import.meta.url === `file://${process.argv[1]}`) {
  await generateTestCases();
}
