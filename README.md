# Todo App

## Prerequisites
 You should have node.js and npm installed on this device to be able to follow the installation of this project.
---
## Installation
_How to run the app_

Since the app consists of both the backend server, mysql and frontend there are 3 steps to run the app. 

 First of all the mysql database should be installed and initialized. How you install mysql depends on your os but after installing mysql you can connect to mysql with `mysql -u root -p` and run `CREATE DATABASE todo;` to create the database on your device. Then all you have left to do is add and configure a .env file on the backend directory with the fields "PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB". 

 Now that everything for the database is done, you should build both the backend and frontend (Before continuing with this step you might want install the dependencies, check that part below!). This step only requires you to go to the frontend and backend directories on your terminal and run the command `npm run build` on both directories. 

 Then can run the `npm run start` on both directories simultaniously (on different terminals so that both the server and the frontend is running).
---
## Dependencies
### Downloading dependencies
 You can install all the necessary dependencies by going to both the frontend and backend directories and simply running the `npm install` commands. If there are any problems with that command and your terminal gives you a missing dependency error you can check whats missing from the list of directories below (sometimes some functionalities change with the dependency version, so if you encounter errors with the dependencies you might need to check that as well!).

### List of backend dependencies:
1. "dependencies":
    - "@types/cors": "^2.8.17",
    - "@types/express": "^4.17.21",
    - "@types/express-validator": "^3.0.0",
    - "@types/node": "^22.3.0",
    - "body-parser": "^1.20.2",
    - "class-transformer": "^0.5.1",
    - "cors": "^2.8.5",
    - "dotenv": "^16.4.5",
    - "express": "^4.19.2",
    - "express-validator": "^7.2.0",
    - "mysql2": "^3.11.0",
    - "nodemon": "^3.1.4",
    - "reflect-metadata": "^0.2.2",
    - "ts-node": "^10.9.2",
    - "typeorm": "^0.3.20"

### List of frontend dependencies:
2. "dependencies": 
    - "@emotion/react": "^11.13.0",
    - "@emotion/styled": "^11.13.0",
    - "@mui/material": "^5.16.7",
    - "@mui/x-date-pickers": "^7.12.1",
    - "@tanstack/react-query-devtools": "^5.51.23",
    - "@testing-library/jest-dom": "^5.17.0",
    - "@testing-library/react": "^13.4.0",
    - "@testing-library/user-event": "^13.5.0",
    - "@types/jest": "^27.5.2",
    - "@types/node": "^16.18.105",
    - "@types/react": "^18.3.3",
    - "@types/react-dom": "^18.3.0",
    - "ajv": "^8.17.1",
    - "luxon": "^3.5.0",
    - "prop-types": "^15.8.1",
    - "react": "^18.3.1",
    - "react-dom": "^18.3.1",
    - "react-query": "^3.39.3",
    - "react-scripts": "5.0.1",
    - "typescript": "^4.9.5",
    - "web-vitals": "^2.1.4"