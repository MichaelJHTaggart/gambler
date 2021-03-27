const bcrypt = require('bcryptjs');

module.exports = {
 register: async (req, res) => {
  const db = req.app.get('db')
  const { name, email, password } = req.body
  const coins = 20;
  const [existingUser] = await db.auth_get_user_by_email([email])

  if (existingUser) {
   return res.status(400).send('User already exists')
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = db.auth_add_user([name, email, hash, coins]);

  req.session.user = newUser;

  res.status(200).send(newUser)
 },
 login: async (req, res) => {
  const db = req.app.get('db')
  const { email, password } = req.body

  const [existingUser] = await db.auth_get_user_by_email([email])

  if (!existingUser) {
   return res.status(404).send('No account associated with email.')
  }

  const isAuthenticated = bcrypt.compareSync(password, existingUser.password)

  if (!isAuthenticated) {
   return res.status(403).send('Incorrect password')
  }

  delete existingUser.password
  req.session.user = existingUser

  res.status(200).send(existingUser)
 },
 getUserSession: (req, res) => {
  if (req.session.user) {
   res.status(200).send(req.session.user)
  } else {
   res.status(404).send('No session found')
  }
 }
}