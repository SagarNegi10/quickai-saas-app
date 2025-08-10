# 🚀 QuickAI SaaS App

A full-stack SaaS platform offering a suite of AI-powered tools including article writing, blog title generation, AI image generation, background and object removal, and resume reviewing.

---

## 🌐 Live Preview

Check out the live app here: [https://quickai-nine.vercel.app](https://quickai-nine.vercel.app)

---

## ✨ Features

- **AI Article Writer** — Generate high-quality articles using Google Gemini API  
- **Blog Title Generator** — Create engaging blog titles with AI  
- **AI Image Generation** — Powered by ClipDrop AI for custom image creation  
- **Background & Object Removal** — Image editing via Cloudinary APIs  
- **Resume Reviewer** — AI-driven resume analysis and feedback  
- **User Authentication & Subscription** — Managed by Clerk  
- **Frontend & Backend** — Built with React + Vite + Tailwind CSS and Node.js + Express  
- **Database** — PostgreSQL hosted on Neon  
- **Deployment** — Both frontend and backend deployed on Vercel  

---

## 🛠️ Tech Stack

- Frontend: React, Vite, Tailwind CSS  
- Backend: Node.js, Express  
- Database: PostgreSQL (Neon)  
- Authentication & Subscription: Clerk  
- AI APIs: Google Gemini API, ClipDrop AI, Cloudinary  
- Deployment: Vercel  

---

## Getting Started

### 📋 Prerequisites

- Node.js (v16 or later)  
- PostgreSQL database (Neon or local)  
- Clerk account for authentication  
- API keys for Gemini, ClipDrop, Cloudinary  

### 📥 Installation

1. Clone the repo

```bash
git clone https://github.com/SagarNegi10/quickai-saas-app.git
cd quickai-saas-app
```

2. Install dependencies for both client and server

```bash
cd client
npm install
cd ../server
npm install
```

### Environment Variables

Create `.env` files in both `client` and `server` directories with the following variables:

**Client (`client/.env`):**

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

**Server (`server/.env`):**

```env
DATABASE_URL=your_postgresql_connection_string

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

GEMINI_API_KEY=your_gemini_api_key

CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Running Locally

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend development server:

```bash
cd ../client
npm run dev
```

3. Open your browser at `http://localhost:3000`

---

## ☁️ Deployment

The app is deployed fully on Vercel. Both the frontend and backend are hosted there for seamless integration.

---

## 📄 License

This project is licensed under the MIT License.

---
