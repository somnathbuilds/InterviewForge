# System Architecture

## Frontend

- React
- React Router
- Tailwind CSS
- Axios

---

## Backend

- Node.js
- Express.js
- JWT Authentication

---

## Database

- MongoDB
- Mongoose

---

## AI Layer

- Gemini API

Responsible for:
- Interview Feedback
- Resume Analysis
- Personalized Roadmap
- AI Mentor

---

## Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

---

## Project Structure

client/

server/

docs/

assets/

---

## Request Flow

User

↓

Frontend

↓

Backend API

↓

MongoDB

↓

Gemini API (only when required)

↓

Response