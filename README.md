# Goal-Based Investment Planner

A full-stack web application that helps users plan and track financial goals using personal financial inputs, deterministic investment calculations, risk-based recommendations, and AI-powered financial insights.

> **Note:** This application is an educational planning tool and does not provide regulated financial advice.

## 🚀 Overview

Most investment applications focus on individual products such as mutual funds, stocks, or fixed deposits. This project takes a **goal-first approach**: users start with a financial goal and the application calculates what they need to save or invest to work toward that goal.

The application combines:

- Financial goal tracking
- Investment and SIP calculations
- Risk-based allocation recommendations
- Emergency-fund analysis
- Progress tracking
- JWT-based authentication
- MongoDB persistence
- Gemini-powered personalized explanations and insights

A key design decision is that **financial calculations are handled deterministically by the application**, while Gemini is used to generate personalized explanations and insights rather than being responsible for the core numerical calculations.

---

## ✨ Key Features

### 🔐 Authentication & Security

- User registration and login
- JWT-based authentication
- JWT stored in an **HttpOnly cookie**
- Protected API routes
- User-specific data access
- Server-side authentication and authorization
- Input validation
- Secure handling of user-owned goals

### 🎯 Goal Management

Users can create and manage financial goals with information such as:

- Goal name
- Target amount
- Target date / timeline
- Current savings
- Risk appetite
- Age
- Dependents
- Existing investments

Supported operations include:

- Create a goal
- View goals
- View an individual goal
- Update a goal
- Delete a goal

### 📊 Financial Dashboard

The dashboard provides a consolidated view of the user's financial position and goals.

It calculates and displays metrics such as:

- Monthly surplus
- Savings rate
- Emergency-fund coverage
- Investment score
- Goal completion percentage
- Remaining amount
- Estimated time required
- Recommended monthly SIP/investment amount
- Suggested investment allocation

### 🤖 AI-Powered Insights

The application integrates the **Google Gemini API** to generate personalized financial insights based on the user's financial profile and goal information.

Gemini is used for:

- Explaining financial insights in simple language
- Generating personalized recommendations
- Providing goal-oriented guidance
- Making dashboard information easier to understand

The application does **not** depend on Gemini for the core financial calculations. This keeps important numerical outputs predictable and reproducible.

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Next.js Frontend   │
                    │   React + JavaScript │
                    └──────────┬───────────┘
                               │
                         REST API Requests
                               │
                               ▼
                    ┌──────────────────────┐
                    │  Node.js + Express   │
                    │      Backend         │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌─────────────┐  ┌──────────────┐
       │   Auth /   │   │ Financial   │  │   Gemini     │
       │ Middleware │   │ Calculations│  │     API      │
       └────────────┘   └──────┬──────┘  └──────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │    MongoDB      │
                       │ User + Goals    │
                       └─────────────────┘
```

### Request Flow

```text
User
  ↓
Next.js Frontend
  ↓
REST API
  ↓
Express Middleware
  ↓
JWT Verification
  ↓
Controller / Service Logic
  ↓
Financial Calculations
  ↓
MongoDB
  ↓
Response
  ↓
Dashboard
```

For AI insights:

```text
User Financial Data
        ↓
Backend
        ↓
Validated Financial Context
        ↓
Gemini API
        ↓
Personalized Explanation / Insight
        ↓
Frontend
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React, JavaScript |
| Styling | CSS / Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT |
| Authentication Storage | HttpOnly Cookie |
| AI | Google Gemini API |
| API Style | REST |
| Deployment | Vercel / Production Deployment |

---

## 🧮 Financial Logic

The application uses deterministic calculations to generate important financial metrics.

### Monthly Surplus

```text
Monthly Surplus = Monthly Income - Monthly Expenses
```

### Savings Rate

```text
Savings Rate = (Monthly Savings / Monthly Income) × 100
```

### Goal Progress

```text
Goal Progress =
(Current Amount / Target Amount) × 100
```

The application also considers the user's:

- Current savings
- Goal amount
- Remaining timeline
- Risk profile
- Existing investments
- Monthly surplus

to calculate an appropriate investment requirement and recommendation.

### SIP Recommendation

The required monthly investment is calculated using the goal amount, existing amount, expected return assumptions, and remaining investment period.

The recommendation is generated by application logic rather than asking the AI model to perform the calculation.

---

## 🔒 Authentication Flow

The application uses JWT authentication with an HttpOnly cookie.

```text
Login
  ↓
Backend validates credentials
  ↓
JWT generated
  ↓
JWT stored in HttpOnly cookie
  ↓
Browser automatically sends cookie
  ↓
Protected API request
  ↓
Authentication middleware verifies JWT
  ↓
User ID extracted from JWT
  ↓
Backend fetches only that user's data
```

### Why HttpOnly Cookie?

Using an HttpOnly cookie prevents client-side JavaScript from directly accessing the token, reducing the risk of token theft through common client-side attacks such as XSS.

---

## 📁 Project Structure

### Frontend

```text
frontend/
├── app/
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   └── goals/
├── components/
├── services/
├── hooks/
├── utils/
└── public/
```

### Backend

```text
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── services/
├── utils/
├── config/
└── server.js
```

The backend follows a modular structure where routes handle endpoint definitions, controllers coordinate requests, services contain business logic, models handle database interaction, and middleware handles cross-cutting concerns such as authentication and validation.

---

## 🔌 Core API Endpoints

> Endpoint names may vary slightly depending on the deployed version.

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Goals

```http
GET    /api/goals
GET    /api/goals/:id
POST   /api/goals
PUT    /api/goals/:id
DELETE /api/goals/:id
```

### Dashboard

```http
GET /api/dashboard
```

The API ensures that authenticated users can only access resources associated with their own account.

---

## ⚙️ Environment Variables

Create a `.env` file in the backend:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=your_frontend_url
```

Never commit secrets or `.env` files to GitHub.

---

## 🧑‍💻 Getting Started

### 1. Clone the repositories

```bash
git clone https://github.com/kamal9205/goal_based_investment_planner-frontend.git
git clone https://github.com/kamal9205/goal_based_investment_planner-backend.git
```

### 2. Install frontend dependencies

```bash
cd investment_planner
npm install
```

### 3. Install backend dependencies

```bash
cd investment_planner-backend
npm install
```

### 4. Configure environment variables

Add the required values to the backend `.env` file.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 🧪 Example User Journey

```text
1. User creates an account
          ↓
2. User logs in
          ↓
3. Backend authenticates the user using JWT
          ↓
4. User enters income, expenses and savings
          ↓
5. User creates a financial goal
          ↓
6. Backend calculates financial metrics
          ↓
7. System generates investment/SIP recommendation
          ↓
8. Dashboard displays goal progress and financial metrics
          ↓
9. Gemini generates personalized explanations and insights
```

---

## 🎯 Engineering Highlights

This project demonstrates practical full-stack development rather than being only a UI project.

### Backend Engineering

- REST API design
- Authentication and authorization
- JWT verification middleware
- User-resource ownership
- CRUD operations
- MongoDB data modeling
- Input validation
- Business-logic separation

### Frontend Engineering

- Next.js application architecture
- React componentization
- Client/server interaction
- API integration
- Authentication-aware UI
- Dashboard state management
- Responsive UI

### AI Integration

- Gemini API integration
- Structured financial context sent to the model
- AI-generated explanations and insights
- Separation between deterministic calculations and generative AI

### Security

- HttpOnly cookie-based authentication
- Protected routes
- Server-side authorization
- Input validation
- Environment-based secret management

---

## 💡 What Makes This Project Different

Instead of building another generic CRUD application, this project combines:

**Full-stack development + authentication + financial calculations + data visualization + AI integration.**

The most important engineering decision is the separation between **deterministic business logic and generative AI**.

Financial calculations are performed by the application, while Gemini is used to explain the results and provide personalized insights. This makes the system more reliable than blindly asking an LLM to calculate financial values.

---

## 🚧 Future Improvements

- Automated transaction tracking
- Bank/account aggregation
- Historical portfolio tracking
- Advanced investment simulations
- Goal comparison and prioritization
- Email reminders for upcoming goals
- Better financial analytics and charts
- Automated testing and CI/CD
- Rate limiting and stronger API abuse protection
- More granular investment allocation models

---

## 📌 Project Links

- **Live Application:** https://goal-based-investment-planner-front.vercel.app/login
- **Frontend Repository:** https://github.com/kamal9205/goal_based_investment_planner-frontend.git
- **Backend Repository:** https://github.com/kamal9205/goal_based_investment_planner-backend.git

---

## 👨‍💻 About the Project

Built as a full-stack application to explore how modern web technologies, backend business logic, databases, authentication, and generative AI can be combined to solve a practical financial-planning problem.

### Core Skills Demonstrated

`React` `Next.js` `JavaScript` `Node.js` `Express.js` `MongoDB` `REST APIs` `JWT` `Authentication` `Gemini API` `AI Integration` `Full-Stack Development`
