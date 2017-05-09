# User Management System
This is a small user and groups management system.
Relies on ReactJS & Redux. For testing I'm using Enzyme.

## Live demo powered by Now.js
  https://users-management-erouolpzok.now.sh


## Usage
### Instalation
Install all the dependencies running the following command
` npm install `

## Expected API
* 	`/users`

This endpoind expects a JSON array of objects
and returns a list of users and the groups the user has assigned

#### Example of JSON structure expected
```
[{
  name: 'Karen',
  groups: [{id:1},{id:2}]
}, {
  name: 'Andres',
  groups: [{id:1},{id:2}]
}]
```




* `/groups`  

This endpoind expects a JSON array of objects
and returns a list of groups

#### Example of JSON structure expected
```
[
	{id:1, name:'Administrator'},
	{id:2, name:'Developer'}
]
```



## Getting Started
To start the aplication run

`npm run start`


`npm run test`


## CurrentAPI
List all users
` http://localhost:3000/users `

Create user
` http://localhost:3000/users/create `

Edit User
` http://localhost:3000/users/Karen `

List all groups
` http://localhost:3000/groups `

Edit group
` http://localhost:3000/groups/1 `

Create a group
` http://localhost:3000/groups/create `


## Experience developing the app and next steps
I started developing this app managing the state without Redux, building a high level state at App.js
After a few days of developing I realized that managing the state this way was hard, it was difficult to send state to components and update state, so I started over…

Facing the fact that I didn’t know Redux (until today) I started learning as fast as I could, reading posts and watching videos.
After a few days of struggle I managed to connect the DevTools and see the magic happen. I was dispatching actions, managing state and monitoring everything.

I’ll keep working on this project adding features like allowing to add one specific permission to a user and not a whole role; refactoring code and testing.
