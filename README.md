# 🛒 E-Commerce Backend

A full-stack e-commerce application focused on building a **scalable backend API** using **Node.js, Express.js, MongoDB, and Mongoose**.

The project implements core e-commerce workflows including **product management, shopping cart operations, and order processing**, with a structured client-server architecture.

## 🚀 Live Demo

**Live Application:**
https://ecmmerce-backend.vercel.app/

**GitHub Repository:**
https://github.com/OMPRAKASHKARRI/ecommerce-backend

---

## 📌 Project Overview

This project was developed to understand and implement the backend architecture of a modern e-commerce application.

The backend provides RESTful APIs for managing:

* 👤 Users
* 📦 Products
* 🛒 Shopping Cart
* 📋 Orders
* 💰 Order Totals
* 🔗 Product relationships and populated data

The application follows a **client-server architecture**, with the frontend and backend maintained separately.

---

## ✨ Features

### 📦 Product Management

* Create and manage products
* Store product information in MongoDB
* Product fields include:

  * Product ID
  * Title
  * Description
  * Price
  * Category
  * Discount

### 🛒 Shopping Cart

* Add products to cart
* Retrieve the current user's cart
* Update cart items
* Remove items from cart
* Populate product information inside cart responses

### 📋 Order Management

* Place orders from cart items
* Calculate the total order amount
* Store order information
* Retrieve user order history
* Populate product details associated with orders

### 🗄️ Database

* MongoDB for persistent data storage
* Mongoose for schema modeling and database interaction
* MongoDB Atlas support for cloud database deployment

### 🔌 RESTful API

The backend follows REST API principles with separate routes, controllers/business logic, and database models.

---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| **Node.js**    | JavaScript runtime              |
| **Express.js** | Backend web framework           |
| **MongoDB**    | NoSQL database                  |
| **Mongoose**   | MongoDB ODM                     |
| **JavaScript** | Backend programming language    |
| **REST API**   | Client-server communication     |
| **dotenv**     | Environment variable management |
| **Nodemon**    | Development server              |
| **Vercel**     | Deployment                      |

---

## 🏗️ Project Structure

```text
ecommerce-backend/
│
├── client/
│   └── Frontend application
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── seed/
│   ├── server.js
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```

> The exact files inside `server/` may evolve as the project is extended.

---

## 🔄 Application Flow

```text
                ┌───────────────┐
                │    Client     │
                │   Frontend    │
                └───────┬───────┘
                        │
                        │ HTTP Requests
                        ▼
                ┌───────────────┐
                │   Express.js  │
                │   REST API    │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │   Business    │
                │     Logic     │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │   Mongoose    │
                │     ODM       │
                └───────┬───────┘
                        │
                        ▼
                ┌───────────────┐
                │    MongoDB    │
                │    Atlas      │
                └───────────────┘
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB Atlas account or local MongoDB
* Git

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/OMPRAKASHKARRI/ecommerce-backend.git
```

### 2. Navigate into the project

```bash
cd ecommerce-backend
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
```

> Never commit your `.env` file or expose database credentials publicly.

---

## ▶️ Run the Backend

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The API will be available at:

```text
http://localhost:5000
```

---

# 📡 API Functionality

The backend provides APIs for the major e-commerce workflows.

## 📦 Products

Typical operations include:

```text
GET     /products
POST    /products
GET     /products/:id
PUT     /products/:id
DELETE  /products/:id
```

## 🛒 Cart

```text
POST    /cart
GET     /cart
PUT     /cart/:id
DELETE  /cart/:id
```

## 📋 Orders

```text
POST    /orders
GET     /orders
GET     /orders/:id
```

> Endpoint paths may vary based on the current route implementation in the server.

---

# 🧠 Key Backend Concepts Demonstrated

This project demonstrates practical understanding of:

* RESTful API development
* Express.js routing
* MongoDB database integration
* Mongoose schemas and models
* CRUD operations
* MongoDB document relationships
* `populate()` for related documents
* Cart management
* Order processing
* Total amount calculation
* Environment configuration
* Backend project structuring
* Client-server communication
* API testing and debugging

---

# 📊 Database Models

The application uses MongoDB collections to represent the core entities of the e-commerce system.

### Product

```text
Product
├── productId
├── title
├── description
├── price
├── category
└── discount
```

### Cart

```text
Cart
├── user
└── products
    ├── product
    └── quantity
```

### Order

```text
Order
├── user
├── products
├── totalAmount
└── order information
```

---

# 🔮 Future Improvements

The project can be extended with additional production-oriented features such as:

* 🔐 JWT authentication
* 👨‍💼 Role-based authorization
* 💳 Payment gateway integration
* 📦 Inventory and stock management
* 🔎 Product search and filtering
* 📄 Pagination
* ❤️ Wishlist functionality
* ⭐ Product reviews and ratings
* 📧 Email notifications
* ⚡ Redis caching
* 🧪 Automated API testing
* 📚 Swagger/OpenAPI documentation
* 🐳 Docker containerization
* 🚀 CI/CD pipeline

---

# 🎯 Learning Outcomes

Through this project, I gained practical experience in designing and developing backend services for an e-commerce workflow.

Key areas of learning include:

* Designing MongoDB schemas
* Building REST APIs with Express.js
* Connecting Node.js applications with MongoDB
* Implementing cart and order workflows
* Working with Mongoose relationships
* Handling asynchronous operations
* Debugging backend API issues
* Structuring a full-stack application
* Preparing backend applications for deployment

---

# 👨‍💻 Author

**Om Prakash Karri**

B.Tech — Data Science

### Connect with me

* GitHub: https://github.com/OMPRAKASHKARRI

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available for educational and portfolio purposes.
