# 🤝 KeenKeeper — Keep Your Friendships Alive

![Status](https://img.shields.io/badge/Status-In--Development-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📌 Project Description

**KeenKeeper** is a smart personal relationship management (CRM) web app built with React.  
It helps users track friendships, monitor interaction history, and maintain meaningful relationships through reminders and analytics.

---

## 🚀 Features

### 🎯 Relationship Tracking
- Smart status system: 🟢 On Track | 🟡 Almost Due | 🔴 Overdue  
- Personalized friend profiles with tags, bio, and email  
- Days since last contact tracking  

### 📊 Analytics Dashboard
- Pie chart showing Call / Text / Video interactions  
- Built using **Recharts**  
- Dynamic updates from timeline data  

### 📜 Timeline System
- Logs Call, Text, and Video interactions  
- Stores data in localStorage  
- Real-time updates across pages  

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page](https://github.com/user-attachments/assets/0f1d9147-8035-4ac8-b704-ac92e96a56cb)

### 👤 Friend Details Page
![Friend Details](https://github.com/user-attachments/assets/c5c1c569-9c55-4f28-9b11-96fdb45236ba)

### 📊 Stats Page
![Stats Page](https://github.com/user-attachments/assets/123fa0f0-f77c-41d7-ba89-85f140a36c9c)
---

## 🛠️ Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Recharts
- React Toastify
- LocalStorage API

---

## 🏗️ Project Structure

```bash
src/
├── components/      # Reusable UI components
├── pages/           # All pages (Home, Details, Stats, Timeline)
├── layout/          # Root layout (Navbar + Footer)
├── data/            # friends.json mock data
└── utils/           # helper functions
