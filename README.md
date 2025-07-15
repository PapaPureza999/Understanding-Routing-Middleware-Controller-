# 🚀 Express.js User API – Routing, Middleware & Controllers

This project demonstrates a modular Express.js REST API that includes routing, middleware, and controller logic. It's ideal for learning scalable backend development using Node.js and Express.

## 📁 Project Structure

```
user-api/
├── controllers/
│   └── users.js
├── routes/
│   └── users.js
├── middleware/
│   └── logger.js
├── server.js
├── package.json
└── README.md
```

## 🔧 Tech Stack

- Node.js
- Express.js
- REST API
- JavaScript (ES6)

## ✨ Features

- `GET /api/users` – Retrieve all users
- `GET /api/users/:id` – Retrieve a specific user by ID
- `POST /api/users` – Create a new user
- `PUT /api/users/:id` – Update an existing user
- `DELETE /api/users/:id` – Delete a user
- Custom logger middleware for request logging

## 🚀 Getting Started

```bash
git clone https://github.com/PapaPureza999/Understanding-Routing-Middleware-Controller-.git
cd Understanding-Routing-Middleware-Controller-/user-api
npm install
node server.js
```

Server will start at: `http://localhost:3000`

## 📬 Example: POST /api/users

**Request Body:**

```json
{
  "name": "Pranjal"
}
```

**Response:**

```json
{
  "id": 3,
  "name": "Pranjal"
}
```

## 🧠 Key Concepts Covered

- Express routing with separate route files
- Controllers for business logic separation
- Middleware (e.g., logging and JSON parsing)
- Clean and maintainable backend architecture

## 🧑‍💻 Author

**Pranjal**  
B.Tech CSE – DITU Dehradun  
GitHub: [PapaPureza999](https://github.com/PapaPureza999)

## 📄 License

Licensed under the MIT License.
