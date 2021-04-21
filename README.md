# Kanon Gaming - Front-End Dev Test

The purpose of this project is to demonstrate my ability as a web developer, given criteria and able to build an application upon being given the criteria. I quite enjoyed building this, and learned SO MUCH throughout the build! I look forward to building more projects like this in the future.

## Functioning backend slot machine
The slot machine is completely handled on the backend of the application. Updating the amount of coins that are in the database in the header of the frontend. I have never built logic to a slot machine before, and it took a lot of planning to get the function to where it is now. I would like to improve the function to be even more efficient in the future.

## Redux holding state
The global state management is being used to hold the session of a user, and to hold the value of state throughout the length of the session cookie. Redux is updated frequently as with every spin of the slot machine the coin count needs to be changed. 

## Authentication
Using bcrypt the passwords are hashed and salted. The users can log in to see their accounts information. They can logout if they are finished.

## Wireframing & Component Planning
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/wireframe.png" >

## Schema
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/schema.png" >

## Backend Authentication
 Please see the results of the hashed & salted passwords after testing with postman 
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/pgweb.png">

## API Calls to https://restcountries.eu/
These are all handled on the frontend of the application. I styled it a bit so that you could get information other than just the country name. I though it could be a cool informational function.