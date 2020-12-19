# Covid19_tracking

## About:
This is a app where the user(admin) can keep a track of all employees in an organization who are Covid+ve.<br/>
Mark an employee as covid+ve or recovered.<br/>
View who came in contact with which employee which enables contact tracing

### First Page:
<img src=https://github.com/RutvikJogdand/Covid19_tracking/blob/main/front-end/photos/Login.png height="200px" width="auto" />
<br/>

### To login please enter the following 
username:
<code>  admin </code>
<br/>
password:
<code> admin123 </code>
<br/>
If you enter any other credentials, an error message will be displayed

### All Employees Page:
<img src=https://github.com/RutvikJogdand/Covid19_tracking/blob/main/front-end/photos/Main1.png height="300px" width="auto" />
<br/>
This shows a list of all the employees.

### Covid+ve Employees:
<img src=https://github.com/RutvikJogdand/Covid19_tracking/blob/main/front-end/photos/Main2.png height="300px" width="auto" />
<br/>
This shows a list of all current covid positive employees with their data
<br/>
Some important data shown for Covid+ve employees:
<ul>
  <li>Quarantine Days: How many days the employee is in quarantine  </li>
  <li>Number Of Quarantines: How many people the employee came in contact with  </li>
 </ul>
<br/>
Also if you click on any of the employee's Number of Quarantines field, It would show you something like this:
<br/>
<img src=https://github.com/RutvikJogdand/Covid19_tracking/blob/main/front-end/photos/Main3.png height="300px" width="auto"  />
<br/>
Here it shows that the employee <code> Sahab Singh </code> came in contact with two other employees(who also have been recommended certain amount of days of quarantine based on their date of infection, default amount of days is 7)

### Logout:
To logout, click on the user icon on the top right corner

### List of assumptions:
Here i have considered two employees to have come in contact with two employees each( which showcases the contact tracing feature)

### Tech stack and tools used:
<ul>
  <li> React </li>
  <li> Redux </li>
  <li> MongoDB </li>
  <li> NodeJS </li>
  <li> ExpressJS </li>
  <li> Material UI </li>
  <li> CSS </li>
 </ul>

### Project Link:
<a href="https://covid-tracker-phi-drab.vercel.app/"> Covid Tracking App</a>
