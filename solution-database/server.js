import express from 'express';
import cors from 'cors';
import { generateTestCases } from './tc-generator/watsonx.js'; // this imports your Watsonx logic

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-test-cases', async (req, res) => {
  const { story } = req.body;

  try {
    const testCases = await generateTestCases(story);
    res.json({ success: true, testCases });
  } catch (err) {
    console.error("Watsonx API failed:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
