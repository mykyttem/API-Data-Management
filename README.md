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
### the first way
1. `git clone <repository_url>`
2. `docker-compose up`
3. Open http://localhost:3000 to view it in your browser.

### The second way
2. open first terminal, and second
3. first `cd backend`
3.1. `python -m venv venv`
3.2. `venv/Scripts/activate`
3.3. `cd alemibc` Make migrations `alembic alembic revision --autogenerate -m "init"`, and `alembic upgrade head`
3.4. `cd ..` 
3.5 `python main.py`

4. second `cd frontend`
4.1. `npm install`
4.2 `npm start`


## Technologies Used
- Frontend: React 
- Backend: FastAPI 
- Migrations: Alembic
- Database: SQLite 