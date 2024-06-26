# JavaScript Server - Course assessment 1


## Overview
This is a meme portfolio project using JQuery, Bootstrap version 5.2.3, and PassportJS. It is built with the Express framework and uses the EJS template engine.

## Technologies Used
JQuery
Bootstrap version 5.2.3
PassportJS
Express
EJS

## Make sure you have the following installed on your system:

- Node.js (version 8.0 or later)
- npm (version 5.0 or later)

## Installation
- Clone or download the repository to your local machine
- Open the project folder in terminal/command prompt
- Run npm install to install required packages
- Start the server with npm start
- Open the browser and navigate to http://localhost:3000/ to access app

## File Structure

- app.js is the main server file.
- The views folder contains EJS template files and partials.
- The public folder holds static files like CSS and JavaScript and pictures.
- The node_modules folder has the installed packages.
- The routes folder holds routing files.

## Adding Styles/JS
- Add any additional styles to public/stylesheets/style.css
- Add custom JS to public/js/custom.js

## User Authentication
- Login system uses PassportJS with a users.json file
- Guest users have limited functionality (can't view meme info)
- Logged-in users are stored with express-session and express-session-json packages