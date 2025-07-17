# ⏱️ Pomodorro Backend

Backend server for the **Pomodorro Productivity App**, enabling user authentication, task management, and secure access using JWT tokens.

---

## 🔧 Features

- ✅ JWT-based user authentication
- ✅ User registration and login
- ✅ Task management with CRUD operations
- ✅ Tagging and task completion toggling
- ✅ Built with Express.js, Mongoose, and Node.js

---

## 🧰 Tech Stack

| Tool       | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Runtime                         |
| Express.js | Web server framework            |
| MongoDB    | NoSQL Database                  |
| Mongoose   | MongoDB ODM                     |
| JWT        | Authentication                  |
| bcrypt     | Password hashing                |
| dotenv     | Environment variable management |
| nodemon    | Dev-time auto-reloading server  |

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/pomodorro-backend.git
cd pomodorro-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env` File

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/pomodorro?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key
```

> ⚠️ **Ensure the MongoDB password is URL-encoded if it contains special characters.**

---

## 🏁 Running the Server

### Development (auto-restarts with changes)

```bash
npm run server
```

### Production

```bash
npm start
```

---

## 🌐 Base URLs

- **Frontend (Production):** [https://pomodorro-frontend.vercel.app](https://pomodorro-frontend.vercel.app)
- **Backend (Local):** `http://localhost:5000`

---

## 🔑 API Endpoints

All endpoints return `application/json`.

### 📂 Public Routes

#### `POST /auth/signup`

Registers a new user  
**Body:**

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "password": "secure123"
}
```

#### `POST /auth/login`

Logs in an existing user  
**Body:**

```json
{
  "email": "jane@example.com",
  "password": "secure123"
}
```

---

### 🔐 Protected Routes

> Requires `Authorization: Bearer <token>` header.

#### `GET /auth/user`

Returns the authenticated user's profile.

#### `GET /tasks`

Returns all tasks for the logged-in user.

#### `GET /tasks/:taskId`

Returns details for a specific task.

#### `POST /tasks`

Creates a new task  
**Body:**

```json
{
  "title": "Focus Session",
  "description": "Work on backend logic",
  "priority": "high",
  "workDuration": 25,
  "shortBreakDuration": "5",
  "longBreakDuration": "15"
}
```

#### `PUT /tasks`

Updates an existing task (same format as above)

#### `PUT /tasks/completion/:taskId`

Toggles the task's completion status.

#### `POST /tasks/tags/:taskId`

Adds tags to a task  
**Body:**

```json
{
  "tags": ["urgent", "frontend"]
}
```

#### `DELETE /tasks/:taskId`

Deletes a task by ID.

---

## 📁 Folder Structure

```bash
pomodorro-backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── index.js
├── .env
└── package.json
```

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).

---

## 👩‍💻 Author

**Sukanya Sen** 💼 [LinkedIn](https://linkedin.com/in/your-profile)
