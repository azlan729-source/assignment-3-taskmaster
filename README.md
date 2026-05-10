

# TaskMaster Pro

## Overview

TaskMaster Pro is a simple fullstack task management application.
It allows users to register, login, and create tasks.

This project focuses on backend API development and frontend integration.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* Sequelize
* JWT Authentication

### Frontend

* React (Vite)
* Axios

---

## Features

* User registration
* User login (JWT)
* Create task
* Get tasks
* Pagination

---

## Installation

### Backend

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
DB_NAME=Taskmaster_db
DB_USER=postgres
DB_PASSWORD=yourpassword
JWT_SECRET=supersecretkey
```

Run backend:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## API Endpoints

### Auth

```
POST /auth/register
POST /auth/login
```

### Tasks

```
GET /tasks?page=1&limit=2
POST /tasks
```

---

## Example

### Register

```json
{
  "name": "Azlan",
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Login

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Create Task

```json
{
  "title": "My task"
}
```

---

## Notes

* JWT token is required for protected routes
* Token must be sent in header:

```
Authorization: Bearer <token>
```

---

## Status

Project is completed and working.

## Demo Video

[Watch Demo Video Here](https://drive.google.com/file/d/1hnAYZtmd1yF-eOLatC9cCrBLjcq04Ed6/view?usp=sharing)
