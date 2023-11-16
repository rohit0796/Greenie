# Greenie Task - ReactJS Website with Account Creation and User Details

Welcome to the Greenie Task project! This ReactJS website enables account creation and user details viewing. The styling is done using CSS, and a Context API manages the centralized user data store across components.
Here are the screenshot of the app.

![Screenshot 2023-11-16 120527](https://github.com/rohit0796/Greenie/assets/91247476/f5702c82-e7e5-41a8-8152-0562561dc223)
![Screenshot 2023-11-16 120510](https://github.com/rohit0796/Greenie/assets/91247476/2fd40eb8-5dd6-4b19-9844-f03492ecb2ec)

## Features

### User Details Page

- *Search Bar:* Used to filter user details to be displayed.
- *User Details Table:* Display user information in a table format with fields like Username, ID, Email, Phone, Creation Date, and a hidden Password.
- *Context API:* Seamlessly manage user data across components.

### User Details Popup


- Clicking on a user details table row opens a popup.
- The popup shows additional user details, with options to generate a report or delete the user.

### Account Creation Page

- Fill in user details (Username, Email, Phone, Password) and submit.
- Newly created user details are added to the Context API data store.
- After the new user details are submitted and data is being populated in the context API data store then the data is updated in the user details table.
### Lighthouse Performence
-The lighthouse Performence score is 92 in incognito mode. Here is the screenshot attached.
![Screenshot 2023-11-16 120929](https://github.com/rohit0796/Greenie/assets/91247476/db29087a-e2d8-4a70-8060-149f4defe648)

## How to Run Project

1. *Clone the Repository:*
   ```bash
   git clone github-repo-link
2. **Install Dependecies:**
   ```bash
   npm install
   ```
   OR
   ```bash
   yarn install
   ```
3. **Run Development server:**
   ```bash
   yarn run dev
   ```
   OR
   ```bash
   npm run dev
   ```

## Project Structure
```bash
greenie-task/
│
├── src/
│   ├── components/
│   │   ├── UserDetails.jsx/
│   │   ├── AccountCreation.jsx/
│   │   ├── accountcreate.css/
│   │   ├── userdetail.css/
│   ├── context/
│   │   ├── context.js/
│   │   ├── ContextHolder.jsx/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx

├── public/
├── .gitignore
├── package.json
├── yarn.lock
└── ...
