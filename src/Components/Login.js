import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = props => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function login() {
 axios.post('/auth/login', { email, password })
     .then(user => {
         props.loginUser(user.id, user.username, user.email)
         props.history.push("/")
     })
 setEmail('')
 setPassword('')
}

return (<div>

<h1>Sign In</h1>

<p>Email</p>
<input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="text"
    placeholder="type here..."
    name="email" required
>
</input>
<p>Password</p>
<input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    type="password"
    placeholder="type here..."
    name="password" required
>
</input>

<button onClick={login}
>Sign In</button>

<Link to="/forgot-password">Forgot your password?</Link>

<div></div>

<Link to='/register'>New to Handle While? Create an account now!</Link>

 </div>

 )
}
export default Login