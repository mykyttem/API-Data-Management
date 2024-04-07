# API-Data-Management
A simple API that allows you to receive and manage data

## Features

Two applications: 
Frontend with two pages: 
- one for receiving and editing data 
- another for viewing, sorting, editing, and deleting data, save to csv
Backend: 
- capable of storing,
- editing
- deleting
- returning data from the database
- and providing data from the RandomDataAPI.
Docker Compose setup for launching the application including frontend, backend, and database.

## Requirements:
- node
- python
- docker

## Installation and Setup

1. `git clone <repository_url>`
2. `docker-compose up`
3. Open http://localhost:3000 to view it in your browser.

## Technologies Used

- Frontend: React 
- Backend: FastAPI 
- Migrations: Alembic
- Database: SQLite 