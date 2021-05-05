# Front-end for SunnyWalk Web Application

## Introduction
SunnyWalk is an inovative application that can advise the user on the best times to take a daily walk to maximise their intake of sunshine.


Features:
* Receive 3 walk recommendations based on time of day and exposure to sunshine; incorporating UV-Index guidelines
* Map a walk
* Receive a reminder for 1 to 3 walks
* Provide feedback on previous walks

![image](https://user-images.githubusercontent.com/78167908/115695581-d7a0f980-a359-11eb-8e4b-e6995e4066b3.png)

![image](https://user-images.githubusercontent.com/78167908/115697011-15525200-a35b-11eb-9dcb-f6c096788c03.png)

![SunnyWalk ProjectQR Code](https://user-images.githubusercontent.com/78167908/117130620-3a51b680-ad98-11eb-8659-27d2269d999f.jpg)






## Tech stack
<table>
  <tr>
    <td>
      <img src="https://i.imgur.com/HwtLE65.jpg" alt="HTML, CSS & Javascript"/>
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

* HTML + CSS + Javascript + Java at the core
* React as the main library for the front-end structure
* Material-UI for components
* Cypress for testing

# Instructions on how to run the project
0. Prerequisites:
* GIT
* Node.js (for npm)
* A web browser
1. Clone the repository on your PC
```sh
git clone https://github.com/CodeBendersTR/sunnywalk-frontend.git
```
2. (Optional) Switch to a specific branch
```sh
git checkout FXXXX
```
3. Install the dependencies witn NPM
```sh
npm install
```
4. Run the application with NPM
```sh
npm start
```
5. Test the application at http://localhost:3000

# Instructions on how to run unit tests followed by above.
0. Start the unit tests
```sh
npm test
```
# Instructions on how to run the end to end tests.
0. Install cypress dependencies
```sh
npm cypress install --save-dev
```
1. Try to open cypress
```sh
node_modules/.bin/cypress open
```
2. If cypress gives an "Failed to deserialize the V8 snapshot blob" error you may need to install cypress to the computer itself. to do this type
```sh
npx cypress install
```
3. Now cypress should run, but if "npm start" stops working use the following
```sh
npm i react-scripts
```
4. Now you should be able to open cypress with no problems and click on "Run 6 integration specs" and watch the tests run.

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
