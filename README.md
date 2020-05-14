## Getting started

Fork and clone the project

Current vesion of node used for this project is `12.16.0`.

This project also requires an installation of postgresql, in my case I used brew to do this `brew install postgresql`

To start the server `brew services start postgresql`, you should see an output of 
```
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```

I would recommend some type of GUI to see the database at a glance such as
- https://www.pgadmin.org/
- https://eggerapps.at/postico/

In order to achieve an easier development environment use a global installation of nodemon `npm install -g nodemon`.

At the root of the app run `npm install` to install all the dependencies/dev-dependencies.

### Running the app locally

run `npm run dev`, this will start a local server `localhost:3000`


### Endpoints
```
GET /users/
```

Hitting this will return all the users from the DB and the reponse will be structred like this
```
{
  "users": [
    {
      "id": 1,
      "name": "Jerry",
      "email": "jerry@example.com"
    },
    {
      "id": 2,
      "name": "George",
      "email": "george@example.com"
    }
  ]
}
```
```
GET /users/:id
```

Hitting this will return a single user from the DB based on the url param provided and the reponse will be structred like this
```
{
  "user": {
    "id": 1,
    "name": "Jerry",
    "email": "jerry@example.com"
  }
}
```

If the endpoint is hit with an improper path like `/usrs` the response will be a 404
```
{
    "code":404,
    "message":"The requested resource does not exist"
}
```

### Unit tests

`npm run test`