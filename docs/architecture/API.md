# API Design

## Authentication APIs

- POST /auth/register
- POST /auth/login
- POST /auth/google
- POST /auth/logout

---

## User APIs

- GET /user/profile
- PUT /user/profile
- GET /user/progress

---

## DSA APIs

- GET /dsa/roadmap
- GET /dsa/questions
- GET /dsa/company
- POST /dsa/submit

---

## Aptitude APIs

- GET /aptitude/roadmap
- GET /aptitude/questions
- POST /aptitude/submit

---

## Core Subject APIs

- GET /subjects
- GET /subjects/:subject
- POST /subjects/submit

---

## Company APIs

- GET /companies
- GET /companies/:id
- GET /companies/:id/eligibility

---

## Mock Interview APIs

- POST /interview/start
- POST /interview/end
- GET /interview/history

---

## Resume APIs

- POST /resume/upload
- GET /resume/analysis

---

## Dashboard APIs

- GET /dashboard
- GET /dashboard/tasks

---

## AI APIs

- POST /ai/recommend
- POST /ai/feedback
- POST /ai/roadmap