# Strapi E-Commerce API

## Overview

This is a simple e-commerce API built with **Strapi**, **TypeScript**, and **SQLite**, designed to manage products, user carts, and orders. The API allows users to browse products, manage their carts, and place orders. It also utilizes **Cloudinary** for image storage.

## Live API

[Strapi E-Commerce API](https://strapi-ecommerce-production-f8fb.up.railway.app/api/)

### Available Endpoints:

- **Products:** `/products`
- **Carts:** `/carts`
- **Orders:** `/orders`

## Features

- **Product Management:** Stores product details like name, description, price, and images.
- **Cart System:** Links users to their respective carts.
- **Order Processing:** Stores purchased products, their prices, and user details.
- **Cloudinary Integration:** Stores and manages images efficiently.

## Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository:

```bash
git clone https://github.com/AbdulrahmanHabiba/strapi-ecommerce
cd strapi-ecommerce
```

### 2. Install Dependencies:

```bash
yarn install  # or npm install
```

### 3. Start Strapi:

```bash
yarn develop  # or npm run develop
```

### 4. Access the Admin Panel:

Once the server is running, navigate to:

```
http://localhost:1337/admin
```

## API Endpoints

### Products

- **Get all products:** `GET /api/products`
- **Get a single product:** `GET /api/products/:id`

### Carts

- **Get user cart:** `GET /api/carts/:userId`
- **Add item to cart:** `POST /api/carts`
- **Remove item from cart:** `DELETE /api/carts/:id`

### Orders

- **Get user orders:** `GET /api/orders/:userId`
- **Place an order:** `POST /api/orders`

## Technologies Used

- **Strapi** (Headless CMS)
- **TypeScript** (Strongly typed language)
- **SQLite** (Database)
- **Cloudinary** (Image storage and management)
- **Next.js** (Frontend - if applicable)

## License

This project is licensed under the MIT License.


