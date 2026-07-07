# Software Requirements Document (SRD) Review

**Role**: Senior Product Manager, Microsoft  
**Date**: July 7, 2026  
**Document Reviewed**: [SRD.md](file:///d:/Dev_Projects/InterviewForge/docs/planning/SRD.md) (v1.0)  
**Project**: InterviewForge (AI-powered placement preparation platform)

---

## 1. Executive Summary

InterviewForge addresses a critical friction point for entry-level candidates (B.Tech/MCA/Freshers) by consolidating disparate study materials (DSA, Core CS, HR prep, resume reviews) into a unified, AI-guided platform. By replacing fragmented tools with a single personalized learning loop, the platform has a strong value proposition.

To elevate this SRD to an enterprise/production-ready standard, we need to focus on **data privacy/compliance**, **AI system resilience**, **product metrics (KPIs)**, and **accessibility**. The current specification is a solid foundation, but it lacks the operational and non-functional requirements necessary to build a secure and scalable product.

---

## 2. Critical Missing Requirements

### 🛡️ A. Data Privacy, Compliance & Security (GDPR/PII)
* **Problem**: The SRD specifies "Resume Upload" and "User Profile," which involve collecting **Personally Identifiable Information (PII)** (names, emails, phone numbers, employment/education histories).
* **Missing Requirements**:
  * **Encryption**: All resumes and profile data must be encrypted in transit (HTTPS/TLS) and at rest (AES-256).
  * **Data Minimization & Deletion**: Implement a "Right to be Forgotten" (account deletion) which purges all uploaded files (resumes) from S3/cloud storage and databases.
  * **AI Data Leakage Protection**: When passing resumes or user answers to the Gemini API, ensure no PII (e.g., candidate phone number/address) is transmitted to third-party endpoints. Define a PII scrub/anonymization step before sending payloads to the LLM.

### ⚡ B. AI Reliability, Latency & Cost Management
* **Problem**: AI operations (Gemini API calls for mock interviews and resume reviews) are high-latency, expensive, and subject to rate limits/outages.
* **Missing Requirements**:
  * **Latency Mitigation**: Introduce streaming responses (Server-Sent Events/WebSockets) for the AI Mentor and Feedback systems to improve perceived performance.
  * **Fallback System**: Define behavior when the Gemini API is rate-limited, timed out, or down. (e.g., graceful error messages, cached static templates, or retry queues).
  * **Rate Limiting (Cost Control)**: Introduce strict per-user daily limits on AI tokens/prompts to prevent malicious abuse or runaway API costs.

### ♿ C. Accessibility & Inclusive Design (WCAG 2.1 AA)
* **Problem**: The target demographic includes students from diverse socio-economic backgrounds and physical abilities.
* **Missing Requirements**:
  * The frontend must adhere to **WCAG 2.1 Level AA** standards (screen-reader compatibility, keyboard navigation for mock tests, appropriate color contrast ratios).
  * Text-to-speech and speech-to-text components (proposed in the roadmap for voice interviews) must include visual/text fallbacks for students with hearing or speech impairments.

### 🌐 D. Network Resilience / Offline Guardrails
* **Problem**: Technical assessments/interviews require continuous connection. Students in regions with spotty internet risk losing progress mid-interview.
* **Missing Requirements**:
  * **Auto-Save State**: Save interview responses locally (e.g., in indexedDB or localStorage) every 30 seconds so users can resume their mock session if they get disconnected.

---

## 3. Recommended Product Improvements

### 📊 A. Define Key Performance Indicators (KPIs)
A Microsoft PM team measures feature success via usage, retention, and conversion metrics. The SRD should define success criteria:
* **North Star Metric**: *Interview Completion Rate* (The percentage of started mock interviews that are successfully completed with feedback reviewed).
* **Retention Metric**: *Weekly Active User (WAU) Retention* (Aim for $X\%$ of students returning weekly to complete at least one roadmap item).
* **Efficacy Metric**: *Average Placement Score Improvement* (User's mock score progression from their first interview to their fifth).

### 🗺️ B. MoSCoW Prioritization of the Product Roadmap
The current roadmap lists 8 advanced features (AI Voice, Calendars, Discussion boards) without priority or sequence. They should be categorized:

| Category | Features | Rationale |
| :--- | :--- | :--- |
| **Must Have (MVP)** | • Core Subject & HR Interviews<br>• Resume Analysis<br>• Dynamic Roadmap | Represents the core value loop. Must work flawlessly before adding bells and whistles. |
| **Should Have** | • Company-wise Roadmaps<br>• Mock Online Assessment | Highly requested features that directly drive candidate conversion/retention. |
| **Could Have** | • AI Voice Interview<br>• AI Resume Builder<br>• Placement Calendar | Enhancements that differentiate the product but aren't strictly necessary for Launch. |
| **Won't Have (v1)** | • Community Discussion<br>• Mobile Application | High maintenance overhead; can be deferred to v2. |

### 🔄 C. Closed-Loop Personalization
Currently, the "Roadmap" and "Interview Practice" are listed as separate features.
* **Improvement**: Tie them together dynamically. If a user performs poorly on an Operating System interview (specifically in *Deadlocks*), the platform should automatically inject *Deadlocks* tutorials/questions into their personalized study roadmap.

---

## 4. Suggested Revisions to SRD Sections

To implement these findings, consider amending the following sections of the SRD:

### Under Section "Functional Requirements":
* **User Authentication**: Add:
  - *Multi-Factor Authentication (Optional)*
  - *Secure Session Expiration (JWT refresh tokens)*
* **Interview Practice**: Add:
  - *Session Auto-save* to prevent progress loss.

### Add Section "Non-Functional Requirements":
* **Security & Compliance**:
  - AES-256 encryption at rest, TLS 1.3 in transit.
  - PII scrubbing on all data passed to LLMs.
* **Scalability & Performance**:
  - P95 response time for web app pages $< 2$ seconds.
  - LLM response latency handled via SSE streaming.
* **Accessibility**:
  - Full keyboard-traversable UI matching WCAG 2.1 AA standards.
