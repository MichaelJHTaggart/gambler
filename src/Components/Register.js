import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducer'


const Register = props => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function createAccount() {
        axios.post('/auth/register', { username, email, password })
            .then(user => {
                props.loginUser(user.id, user.username, user.email)
                props.history.push("/")
            })
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (<div>

        <h1>Create Account</h1>

        <p>Username</p>
        <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="type here..."
            name="username" required
        >
        </input>

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

        <button onClick={createAccount}
        >Create My Account</button>

        <div></div>

        <Link to='/sign-in'>Already have an account? Sign in now!</Link>
    </div>

    )
}
function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Register)