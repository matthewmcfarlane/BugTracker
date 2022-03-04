# Zappr (Bug Tracker)
The bug tracker app allows a team to track any known bugs. Bugs reported and then asigned to either one or multiple team members. When reporting a bug, they are timestamped and the priority can be set as either low, medium or high, with a description.

Bugs can be filtered via priority or status (open/closed), sorted via date or status(open/closed), or a combination of both. Once a bug is resolved, the status can be toggled as closed or deleted from the database. 

Users are able to track 'my issues' which will display any bugs assigned to them or reported by them.

Users are able to login to the app after they are registered by the administrator. Authentication and authorisation are implemented using Auth0. 

Once a user is registered and assigned a role by the admin using Auth0, they are able to login.
On login, there is a check which determines if a user is present on the database via their Auth0sub (Unique ID obtained after authentication), if they are not, they are added to the database.  

Users are able to toggle between light mode and dark mode. 

This app was built with using ReactJS, Java, Spring, H2, TailwindCSS and Auth0.



## Project set up

| Front-end (client) | Back-end (server)    |
| :---               | :---                 |
| `npm install`      |  Open project with IDE such as InteliJand run BugTrackerApplication                                      |
| `npm start`        |  IDE such as InteliJ |
|                    |  and run             |
|                    | BugTrackerApplication|

Navigate to localhost:3000. 
In order to login, a demo account has been created. The credentials are:

Email: IssueTrackerDemoUser@gmail.com
Password: DemoAccount2022!