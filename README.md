# Kanon Gaming - Front-End Dev Test

I spent collectively about 8 hours on this project. Planning, and building.

This project is not complete, but some of the completed aspects:
## Basic Front-end Template
## Redux setup
## Wireframing & Component Planning
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/wireframe.png" >

## Schema
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/schema.png" >

## Backend Authentication
 Please see the results of the hashed & salted passwords after testing with postman 
<img src="https://github.com/MichaelJHTaggart/gambler/blob/main/src/media/pgweb.png">

Unfortunately I encountered challenges when building out the slot machine function in the backend. This took about 4 of the eight hours that were spent working on this project. Due to this incompletion I have commented out the userController.

Here is the complete .env: **Please note** this includes a Connection String to a live database that I own at Heroku:

SERVER_PORT=4644
SESSION_SECRET=k;lajsdlf02398u098asdf90pa87sdf098as7d0f98a7sd09f87as0d98f7a0s98df70a9s8d7f0a89iusydhf!!@#$#$%!@#$%#&612346!@#$^!#%!34b
CONNECTION_STRING=postgres://fkijugtwfdupbx:f50375eeb2b7c113b9e0788bde731b62b40526f401cd1f1ff0420f44668e7d93@ec2-54-161-239-198.compute-1.amazonaws.com:5432/d9vo1k6opmjimd
