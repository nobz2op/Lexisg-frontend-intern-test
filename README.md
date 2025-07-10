Lexisg-Frontend-Intern-Test

This is a frontend simulation of a Lexi-like legal assistant, built with React.js and Tailwind CSS.

It allows users to:
- Ask a legal question
- View a generated AI answer
- See citations below the answer
- Click the citation to open the source PDF in a new tab

---

## 🚀 Live Demo (optional)

👉 [View Deployed App on Vercel](https://lexisg-frontend-intern-test-vert.vercel.app/)  
_

---

## 🛠️ How to Run the Project Locally

Make sure Node.js (v18 or v20) and npm are installed.

### 1. Clone this repository

```bash
git clone https://github.com/nobz2op/Lexisg-frontend-intern-test.git
cd lexisg-frontend-intern-test
2. Install dependencies
bash
Copy
Edit
npm install
3. Start development server
bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

💬 Simulated Legal Query and Answer
Query:

In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?

Answer:

Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.

Citation:

“as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7)

📄 Click to View PDF

🔗 Citation Linking
The answer card displays a citation link below the AI-generated answer.

When clicked, it opens the source judgment PDF in a new browser tab.

This simulates “scroll to paragraph” behavior.

📸 Screenshot
Save a screenshot of your app as screenshot.png and include it in the project folder.


📁 Project Folder Structure
pgsql
Copy
Edit
lexisg-frontend-intern-test/
├── public/
├── src/
│   ├── components/
│   │   ├── AnswerCard.jsx      
│   │   ├── CitationModal.jsx   
│   │   ├── ChatInput.jsx
│   │   └── ChatMessage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
├── package.json
└── screenshot.png

🧰 Tech Stack
React.js (with Vite)

Tailwind CSS for styling

No backend (simulated data)

PDF hosted externally (SharePoint)

📤 Submission Info
You can now submit:

🔗 GitHub Repo: https://github.com/nobz2op/Lexisg-frontend-intern-test

🖼️ Screenshot: screenshot.png inside this repo

✅ (Bonus) Hosted on Vercel: [link if deployed]

📧 Send to: 

👤 Author
Noble Sabu
Frontend Intern Candidate – Lexi
GitHub: @nobz2op

📝 License
For Lexi Internship 2025 assignment use only. Educational purpose.