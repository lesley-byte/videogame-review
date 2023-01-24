## Express Sequelize Mysql Template

### Description
This is a 🔥template🔥 for a Node.js Express server with Sequelize and MySQL.

### Installation 🫠
1. Clone the repository ✨
2. Run `npm init -y` 
3. Run `npm install` for the dependencies.
    a. examples of the dependencies are:
    - "bcrypt"
    - "clog"
    - "connect-session-sequelize"
    - "dotenv"
    - "express"
    - "express-handlebars"
    - "express-session"
    - "handlebars"
    - "mysql2"
    - "sequelize"
4. Create a `.gitignore` file and add the following:
    - node_modules
    - .DS_Store
    - .env
5. Update the package.json file with scripts:
    - `"start": "node server.js",`
    - `"seed": "node seeds/seed.js"`
    - `"test": "jest"`
6. Install the dev dependencies with `npm install --save-dev`
    - `"jest"`
    - `"supertest"`
    - `"cross-env"`
7. Add the following to the `package.json` file:
    ```json
     "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "/__tests__/setup.js"
    ]
  }```
8. Create update the `.env.EXAMPLE` file with your MySQL username, password, and database name. AND rename the file to `.env`
9. CREATE a database in MySQL, name should match the one in the `.env` file.
10. Fill in the files in all the folders with the appropriate code.
    - Fill in models
    - Fill in controllers
    - Fill in Views
11. Run `node seeds/seed.js` to seed the database.
12. Run `npm start` to start the server.
13. Open the browser and go to [👉localhost:3001](http://localhost:3001) to view the application.
14. Run `npm test` to run the tests.
