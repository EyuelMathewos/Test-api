## Test API
This is Continarized Backend API Made with Express.JS, MongoDB and Docker.


## Demo Link
   [https://backend-test-api.herokuapp.com/] (Live API Demo)
   
   CREATE EMPLOYEE [https://backend-test-api.herokuapp.com/addemployee]
   GET EMPLOYEE BY ID [https://backend-test-api.herokuapp.com//getemployee/]<ID OF EMPLOYEE>
   GET LIST OF EMPLOYEE [https://backend-test-api.herokuapp.com/getemployeelist]
   UPDATE EMPLOYEE [https://backend-test-api.herokuapp.com/updateemployee/]<ID OF EMPLOYEE>
   DELETE EMPLOYEE [https://backend-test-api.herokuapp.com/deleteemployee]<ID OF EMPLOYEE>

## To Run the App

In the project directory, you can run:

In this app Docker have two container one is the mongodb and the other is node.js app container and 
we are using docker-compose to link the to gether.

Compose is a tool for defining and running multi-container Docker applications and used for local developemnt purpose until upgrade.



### `Docker-compose build`

Builds, (re)creates, starts, and attaches to containers for a service.

### `Docker-compose up`

Compose starts and runs your entire app.


### `Docker-compose down`

down stops running containers.
