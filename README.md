# 💻 Resume Screening Frontend (React + Vite)

A modern React frontend for the AI-powered Resume Screening System, built with **React** and **Vite**. This frontend provides user registration, resume uploads, admin login, and admin dashboard functionality to interact with the backend screening system.

---

## 🚀 Features

- ✅ Admin login interface  
- ✅ User registration and resume upload forms  
- ✅ Admin dashboard to view users and screen resumes by job role  
- ✅ Responsive UI built with React components  
- ✅ Modular structure for easy maintenance and extension  

---

## 🧰 Tech Stack

| Component    | Technology       |
|--------------|------------------|
| Framework    | React            |
| Build Tool   | Vite             |
| Styling      | CSS              |
| API Calls    | Fetch API / Axios (optional) |
| Components   | AdminLogin.jsx, AdminPanel.jsx, Register.jsx, Upload.jsx |

---

## 📁 Project Structure

```bash
frontend/
├── node_modules/                  # Installed npm packages
├── public/                       # Static public assets (index.html, favicon)
├── src/
│   ├── components/               # React components
│   │   ├── AdminLogin.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── Register.jsx
│   │   └── Upload.jsx
│   ├── api.js                    # API interaction functions
│   ├── App.jsx                   # Root component
│   ├── App.css                   # Main CSS styles
│   ├── index.css                 # Global CSS styles
│   └── main.jsx                  # React app entry point
├── .gitignore                    # Git ignore rules
├── index.html                   # Main HTML template
├── package.json                 # npm package config
├── package-lock.json            # npm package lockfile
├── vite.config.js               # Vite config
├── eslint.config.js             # ESLint config

```

## 📝 Usage Overview

- AdminLogin.jsx: Admin users can login with their credentials to access the dashboard.

- Register.jsx: New users register and upload their resumes for screening.

- Upload.jsx: Allows users to upload PDF resumes.

- AdminPanel.jsx: Admin dashboard displays users by role and ATS scores fetched from the backend.

## Steps to create React + Vite project

1.Clone the repository:
```bash
git clone https://github.com/yourusername/resume-screening-frontend.git
cd resume-screening-frontend/frontend

```
2. Open your terminal and run the following command to create a new React project with Vite:

```bash
npm create vite@latest my-react-app -- --template react
```
```bash
npm install
```
```bash
npm run dev
```

## ✍ Author
Made with ❤ by Marreddy Gayatri Devi

## 📜 License
This project is released for personal and educational use only. All rights reserved by Marreddy Gayatri Devi.



