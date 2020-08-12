# Student Evaluation Tool

## Deployed version
- [Check out the deployed version here](https://student-evaluation-tool.netlify.app)

## About the project

The student Evaluation tool is a Full stack web application which is an optimal workflow for teachers to manage classes, students, and their evaluations all in one place. Teachers can track each student's performance by evaluating on their day-to-day basis. This repository contains only the front-end code of the application. To check the backend code, visit [Backend code](https://github.com/sushmitha-b-s/student-evaluation-server)

## Technologies used

- Frontend
  - HTML5, CSS3, SCSS, JavaScript, Vue.js, Vuex (state management), Vuetify and Vuelidate.
- Backend
  - Node.js, Express.js, Sequelize(ORM library), RestAPI's, JWT (for authentication).

## Features
- Secured web application using JSONWebToken. Users can register and login to use the application.
- Form validation using Vuelidate.
- The project contains home page and three main views -> ClassListView, StudentsList view, and a StudentDetails view. All three views are secured and can be used only if the user is registered.
- ClassList view
  - Registered users can see the list of classes, create new classes, and delete them.
- StudentsList view
  - Registered users can see the list of students (with their name, profile picture and the latest  colorcode given to them).
  - Registered users can create new student (which accepts name, profile picture link, address, email, mobile no., zipcode, city, country), edit their details and delete them.
  - This view has the progress bar which represents the percentage of students evaluated by RED,  YELLOW or GREEN in that current class.
  - This view has 'ASk A QUESTION' button, which is really helpful for teachers to pick any student  in the class and to ask them a question. This picks the student randomly based on their latest  performance (RED, YELLOW or GREEN). Not entirely random though. Students with RED have a 50%  chance, YELLOW with a 33% chance and, GREEN with a 17% chance (secret algorithm is used 🤓).
- StudentDetailsView
  - This page conatins all the details of a single student. All the evaluations given to the student are displayed.
  - Registered users can add new evaluation (which accepts date, colorcode and remarks).
  - Evaluations can be sorted by date (in ascending or descending order).
  - Registered users can delete the evaluation.

##Improvements
- Currently, the application is not responsive. It can be done responsive.
- There are no SUCCESS or ERROR notifications. This can be built.

## Steps to run the project
Note: The below steps doesn't work if the backend is not setup.

1. Clone the repository.
    ```
    $ git clone git@github.com:sushmitha-b-s/student-evaluation-client.git
    $ cd student-evaluation-client
    ```
2. Install node dependencies.
    ```
    $ npm install
    ```
3. Run the below command.
    ```
    $ npm run serve
    ``` 