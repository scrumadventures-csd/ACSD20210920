# ACSD20210920
A-CSD Environment Setup
JavaScript
Environment Overview
Our learning environment is made up of several parts:
	Server-side
o	GitHub Source code repository
o	Netlify front-end runtime
o	Heroku back-end runtime
o	CI/CD pipeline
	Client-side
o	Visual Studio Code as your IDE
o	SDK
o	Unit test framework (e.g. JSUnit)
o	BDD framework (Cucumber.js)
o	Selenium for JS
o	Feature toggles (https://www.npmjs.com/package/feature-toggles)
Setup Instructions
1.	Install Visual Studio Code
Download the IDE from code.visualstudio.com and install it.
2.	Clone the Project Repository
You will receive an invitation by email to join the scrumadventures-csd/ACSDyyyymmdd Github repository (where yyyymmdd is the date of the first day of the class).
Accept the invitation and you are taken to the Github repository page. The repository contains a skeleton application that you will build upon during the class.
Click the green Code button and then Open with Github Desktop. (Download and install Github Desktop if you don’t already have it installed.)
 
Choose the local path you want and click Clone. Remember what this folder is!
3.	If you do not have Node.js installed on your machine
Go to nodejs.org, download the installation package and install it
4.	Install the server dependencies
Open a terminal or command window and change to the base (ACSD...) directory:

..........> cd ACSD20210920
.../ACSD..> npm i
If the npm command is not found, it means you do not have Node.js installed. Install Node.js per step 3, above.
5.	Install the client dependencies

.../ACSD..> cd client
.../client> npm i
Smoke Testing
1.	Run the client 

.../client> npm start

Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.208:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
You should see the following:
 
2.	Run the server 
Open a new terminal or command window and change to the base (ACSD...) directory:

..........> cd ACSD20210920
.../ACSD..> npm start

> server@1.0.0 start /Users/vanyab9/Documents/GitHub/ACSD20210929
> node index.js

Listening on port: 5000
