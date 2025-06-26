# 🧠 Smart SDLC – AI-Powered Test Case Generator

This project is a Smart SDLC (Software Development Life Cycle) tool powered by **IBM Watsonx.ai**. It uses **Generative AI** to automatically generate test cases from user stories, helping developers and QA teams streamline and accelerate testing processes.

---

## 🚀 Features

✅ Generate test cases using IBM foundation models  
✅ Node.js backend with Express  
✅ Simple HTML/CSS/JS frontend  
✅ IBM Watsonx.ai integration (via API key)  
✅ Custom prompt-based generation  
✅ Secure API key handling using `.env`

---

## 📁 Project Structure

smart-sdlc-main/
│
├── tc-generator/
│ ├── watsonx.js # Core logic to call IBM Watsonx API
│ └── index.js # Optional script to run it standalone
│
├── server.js # Express backend to handle requests
├── index.html # Frontend UI for input and results
├── package.json # Dependencies
├── .env # API key (not committed)
└── README.md # Project documentation

yaml
Copy code

---

## 🔧 Tech Stack

- 🟦 Node.js (v18+)
- 🎨 HTML, CSS, JS
- ☁️ IBM Watsonx.ai (Granite Foundation Model)
- 🔐 dotenv for secure credentials
- 📡 axios for HTTP requests

---

## 📦 Installation & Setup

### 1. Clone the repo or download ZIP
```bash
git clone https://github.com/your-username/smart-sdlc.git
cd smart-sdlc-main
2. Install dependencies
bash
Copy code
npm install
3. Create .env file
bash
Copy code
GENAI_API_KEY=your_ibm_genai_key_here
4. Run backend
bash
Copy code
node server.js
5. Open index.html in your browser
🧪 How It Works
User enters a user story (e.g., "As a user, I want to log in securely").

The frontend sends this to the backend (/generate-test-cases).

The backend calls Watsonx.ai API with the story.

Watsonx responds with AI-generated test cases.

The frontend displays the results.

📸 Preview

🔐 Security Notes
Keep your .env file private

Do not commit your API key to GitHub

Always rotate keys if sharing your project

🙌 Credits
IBM Watsonx.ai

Built by Srikar Bharadwaj

📜 License
This project is for educational/demo purposes. For commercial use, ensure compliance with IBM Cloud usage terms and model licensing.

yaml
Copy code

---

### ✅ Next:
- Save this as `README.md` in your project root.
- Add a `.env.example` file if you’re sharing the repo: