# 🔍 GitHub Explorer

**GitHub Explorer** is a full-stack developer productivity web app that transforms your GitHub activity into insightful dashboards and AI-crafted summaries. It's perfect for building a public portfolio, visualizing your contributions, and standing out with a smart, shareable developer profile.

---

## 📌 Overview

GitHub Explorer connects to your GitHub account to analyze your contributions and display them in a sleek, visual format. It also uses OpenAI to craft a polished summary of your development journey — ideal for resumes, LinkedIn, or personal websites.

---

## 🎯 Key Features

- 🔐 **GitHub OAuth2 Login**  
  Secure sign-in via GitHub authentication.

- 📡 **Real-Time GitHub Data Fetching**  
  Pulls your GitHub data using the GraphQL API: profile, repositories, commits, issues, PRs, languages, and stars (past 6 months).

- 📊 **Interactive Analytics Dashboard**  
  - Contribution charts & language usage  
  - Metrics: PRs, issues, stars, forks  
  - Repository rankings by activity

- 🤖 **AI-Generated Developer Summary**  
  - Powered by GPT-4  
  - Generates a professional, human-like summary based on your contributions  
  - Great for portfolios and LinkedIn headlines

- 🌍 **Public Developer Portfolio**  
  - Accessible at `/explorer/:username`  
  - Includes GitHub avatar, metrics, AI summary  
  - Easily shareable and exportable (PDF/Markdown)

---

## ⚙ Tech Stack

### 🖥 Frontend
- React + Tailwind CSS  
- Recharts / Chart.js for visualizations

### 🔧 Backend
- Node.js + Express  
- GitHub GraphQL API  
- OpenAI API (GPT-4)

### 💾 Database
- PostgreSQL with Prisma ORM or Supabase  
- Tables:  
  - `users`: GitHub profiles + tokens  
  - `repos`: Contribution metadata  
  - `summaries`: Generated AI content

### 🔐 Authentication
- GitHub OAuth2 flow  
- Secure token storage

---

## 📤 API Endpoints

| Method | Endpoint                         | Description                        |
|--------|----------------------------------|------------------------------------|
| POST   | `/auth/github`                   | Handle GitHub OAuth login          |
| GET    | `/api/user/:username/stats`      | Fetch contribution statistics      |
| POST   | `/api/user/:username/summary`    | Generate or retrieve AI summary    |
| GET    | `/api/user/:username/portfolio`  | Public profile & portfolio data    |

---

🎁 **Bonus Features**

🏆 Contributor Leaderboard  
⏱ Automatic Daily Sync via GitHub Webhooks  
📄 Export to Notion or Resume Builder Formats

---

🙌 **Acknowledgements**

- GitHub GraphQL API  
- OpenAI API  
- Recharts  
- Tailwind CSS  
- Prisma / Supabase

---

🧪 **Status**  
🚧 Actively In Development — feedback, ideas, and contributions are welcome!
