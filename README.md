#### (Pomodorro-backend)
Backend for pomodorro project.

## Features -
- Authentication using JWT token
- User authentication
- Task management

## Stack Used
- Node JS
- Express JS
- Mongoose
- Javascript

## Steps To Run locally
- Clone or fork the project
- `npm install`
- `npm start` or
- `npm server` for development mode - using nodemon

## Env variables
- PORT - 5000
- MONGO_URL - (Mongo configuration of the cluster)
- JWT_SECRET

## Base URL
- Production - `vibes--frontend.vercel.app`
- Local - `http://localhost:5000`

## Endpoints
- All responses are made with Content-Type: application/json

      (Public Routes)

</br>

> ### Authentication

1. #### `/auth/login` [POST]

- Description - logs in a user to the system
- Requires - `[email: <string>, password: <string>]`
- Returns - access token and user info on success, error message on failure.

2. #### `/auth/signup` [POST]

- Description - registers a new user
- Requires - `[fullName: <string>, email: <string> password: <string>]`
- Returns - access token and user info on success, error message on failure.

        (Protected Routes)

### All protected routes require token in header -
```javascript
headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2JkZTU1N2Y4ZWRiNzM3MjQ4ZGM0YiIsImlhdCI6MTY1MjI4NTAxNCwiZXhwIjoxNjU0ODc3MDE0fQ.yIfgTISVW6c3yMPsRijLrSwXuM0vFhhW5jxY6VgyyYw'
}
```
<br/>

> ### User

1. #### `/auth/user` [GET]

- Description - get user details
- Requires - NA
- Returns - user info on success, error message on failure.

<br/>

> ### Task

1. #### `/tasks` [GET]

- Description - get all tasks of logged in user
- Requires - NA
- Returns - array of task object on success, error message on failure.

2. #### `/tasks/:taskId` [GET]

- Description - get task details
- Requires - NA
- Returns - single task object on success, error message on failure.

3. #### `/tasks` [POST]

- Description - add task to task model
- Requires - `[title: <string>, description: <string>, priority: <string>, workDuration: <number>, shortBreakDuration: <string>, longBreakDuration: <string>]`
- Returns - newly added task on success, error message on failure.

4. #### `/tasks` [PUT]

- Description - update a task 
- Requires - `[title: <string>, description: <string>, priority: <string>, workDuration: <number>, shortBreakDuration: <string>, longBreakDuration: <string>]`
- Returns - updated task on success, error message on failure.

5. #### `/tasks/completion/:taskId` [PUT]

- Description - change completion status of task id
- Requires - NA
- Returns - updated task on success, error message on failure.

6. #### `/tasks/tags/:taskId` [POST]

- Description - add tags to a task 
- Requires - `[tags: <array>]`
- Returns - updated task on success, error message on failure.

7. #### `/tasks/:taskId` [DELETE]

- Description - delete a task 
- Requires - NA
- Returns - deleted task id on success, error message on failure.
