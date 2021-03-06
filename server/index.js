//Dependencies
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const path = require('path');

//Imported controller files
const user = require('./controllers/userController');
const auth = require('./controllers/authController');


//imported variables
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

//activations
const app = express();

//middleware
app.use(express.json());

app.use(
 session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
 })
)

app.use(express.static(`${__dirname}/../build`)) //serve up our build folder


//Auth Controllers

app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.get('/auth/user', auth.getUserSession);
app.delete('/auth/logout', auth.logout);

//User Controllers
app.put('/user/spin', user.spin)


app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive({
 connectionString: CONNECTION_STRING,
 ssl: {
  rejectUnauthorized: false,
 },
}).then((dbInstance) => {
 app.set('db', dbInstance)
 console.log('db connected')
 app.listen(SERVER_PORT, () => {
  console.log(`Streaming on port ${SERVER_PORT}`)
 })
})