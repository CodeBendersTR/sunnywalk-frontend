# Front-end project for SunnyWalk application

## Introduction
SunnyWalk is an inovative application that will help you take your daily dose of sunshine by taking a walk.

Features:
* Suggest a walk based on weather conditions
* Track a walk on the map
* View previous walks
* Give feedback on the previous walks


## Tech stack
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/WnL7eFG.jpg" alt="Javascript"/>
    </td>
    <td>
      <img src="https://i.imgur.com/qJnsQdJ.jpg" alt="React"/>
    </td>
    <td>
      <img src="https://i.imgur.com/D5bzVeu.jpg" alt="Material-UI"/>
    </td>
    <td>
      <img src="https://i.imgur.com/sZmH65c.jpg" alt="Cypress"/>
    </td>
  </tr>
</table>

* JAVA as the programming language for the back-end (IntelliJ Idea Community IDE)
* Spring Boot framework for creation of the REST API (project initialized with Spring Initializr)
* MySQL for persistence (MySQL Workbench for working on the database)
* JUnit for testing

# Instructions on how to run the project
0. Prerequisites:
* GIT
* JDK 1.8
* Maven (must be visible on windows path)
1. Clone the repository on your PC
```sh
git clone https://github.com/CodeBendersTR/sunnywalk-backend.git
```
2. (Optional) Switch to a specific branch
```sh
git checkout BXXXX
```
3. Make the connection with your database (for security reasons we cannot provide the connection to our database)
* We used in our application.properties Windows evironment variables
* You can replace those variables with your own connection string or set the environment variables accordingly
4. Run the application with Maven
```sh
mvn spring-boot:run
```
5. Test the API at http://localhost:8080

# About the team
## CodeBenders - because code bends at our will :)
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/ZEv9tbA.jpg" alt="CodeBenders"/>
    </td>
    <td>
      <p>
        We are a team of four talented people taking part in the Tech Returners programme (March 2021, London).
        <ul>
          <li>
            Ciaran (<a href="https://github.com/ShyguyCC">ShyguyCC</a>)
          </li>
          <li>
            Jini (<a href="https://github.com/jinirun">jinirun</a>)
          </li>
          <li>
            Marius (<a href="https://github.com/grigorem">grigorem</a>)
          </li>
          <li>
            Susan (<a href="https://github.com/SusanLuebke">SusanLuebke</a>)
          </li>
        </ul>
      </p>
    </td>
    </td>
  </tr>
</table>
