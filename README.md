# CSE Question Paper Management System

A simple web-based application to **store, manage, and download previous year Computer Science & Engineering (CSE) question papers**.  
Designed using a **college-friendly technology stack**, this project is ideal for academic submissions and mini projects.

---

## Features

- Admin can upload question papers
- Students can view and download papers
- Papers categorized by subject, year, and semester
- File upload support (PDF / DOC)
- Lightweight and easy to understand

---

## Technology Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | HTML, CSS  |
| Backend    | Node.js, Express.js |
| Database   | MySQL |
| Tools      | VS Code |

---

## Project Structure
```md
cse-question-paper-system
│
├── server.js
├── db.js
├── uploads/
├── public/
│ ├── index.html
│ ├── admin.html
│ └── style.css
```
---

## Installation & Setup

### 1️⃣ Install Required Software
- Node.js (LTS version)
- MySQL Server
- Visual Studio Code

### 2️⃣ Clone or Create Project Folder
cse-question-paper-system

### 3️⃣ Install Dependencies
Use npm to install required Node packages.

### 4️⃣ Database Setup
- Create a MySQL database
- Create a table to store question paper details

### 5️⃣ Configure Database Connection
- Update MySQL username and password in database configuration file

---

## Running the Project

1. Start the server using Node.js  
2. Open browser and navigate to:

- **Student Page:**  
  `http://localhost:3000/index.html`

- **Admin Upload Page:**  
  `http://localhost:3000/admin.html`

---

## User Roles

### Admin
- Upload question papers
- Enter subject, year, and semester

### Student
- View available papers
- Download required files

---

## Notes

- Ensure MySQL service is running before starting the server
- Uploaded files are stored in the `uploads` folder
- Suitable for **mini projects, DBMS projects, and web technology labs**

---

## Acknowledgements

- Node.js
- Express.js
- MySQL
- Open-source community

---

## Author

### Kaviya

Computer Science Engineering Student

🚀 Passionate about Frontend & Backend Development, AI-powered systems, and creating practical, real-world solutions 💙

---

## Support

If you found this project useful, please give it a star ⭐ It really helps and motivates future improvements!
