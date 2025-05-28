
# Rental Marketplace

A **Java Fullstack Rental Marketplace** web application where users can browse, post, and rent products such as furniture, vehicles, electronics, and sports equipment.

This project was developed as part of my fullstack development learning and integrates **Spring Boot (Java)** on the backend with a **React.js** frontend, using **MySQL** as the database.



## 🚀 Features

- 🏠 **Browse Products**: Explore products by category and subcategory.
- 🛒 **Product Details**: View detailed product descriptions, rent price, location, and images.
- ➕ **Add Products**: Registered users can post their rental products.
- 🔐 **Authentication**: JWT-based signup, login, and secure API access.
- 🔄 **Refresh Tokens**: Support for token refresh to maintain user sessions.
- 📦 **Backend API**: RESTful APIs for product management, user authentication, and more.



## 📁 Project Structure

```bash
/rental-marketplace
│
├── backend  → Spring Boot (Java) backend
│   ├── src/main/java/com/rentalmarket/backend
│   └── src/main/resources
│
└── frontend → React.js frontend
    ├── public
    └── src
```



## 🛠️ Technologies Used

### Backend
- Java 17
- Spring Boot
- Spring Security + JWT
- MySQL
- Maven

### Frontend
- React.js
- Axios
- React Router
- Tailwind CSS



## 🏗️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/rental-marketplace.git
cd rental-marketplace
```



### 2️⃣ Backend Setup

```bash
cd backend
```

- Configure **application.properties**:
    ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/your_db
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    jwt.secret=your_jwt_secret
    ```

- Build and run:
    ```bash
    ./mvnw spring-boot:run
    ```



### 3️⃣ Frontend Setup

```bash
cd frontend
```

- Install dependencies:
    ```bash
    npm install
    ```

- Start the app:
    ```bash
    npm start
    ```



## 🌍 API Endpoints

| Endpoint               | Method | Description                   |
|------------------------|--------|-------------------------------|
| /api/auth/signup       | POST   | Register new user             |
| /api/auth/signin       | POST   | Login and receive JWT         |
| /api/products          | POST   | Add a new product (auth req) |
| /api/products          | GET    | Get all products              |
| /api/products/{id}     | GET    | Get product by ID             |



⭐ **Feel free to star this repo if you like it!**

