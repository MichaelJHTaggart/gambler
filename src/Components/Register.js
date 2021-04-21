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

    return (<div id="country-wrapper">

        <h1 className="country-name">Register</h1>

        <p className="answers">Username</p>
        <input
            placeholder="Type Username here..."
            className="form__field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username" required
        >
        </input>

        <p className="answers">Email</p>
        <input
            placeholder="Type Email here"
            className="form__field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email" required
        >
        </input>
        <p className="answers">Password</p>
        <input
            placeholder="Type Password here..."
            className="form__field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password" required
        >
        </input>

        <button id="rainbow-1" onClick={createAccount}
        >Create My Account</button>

        <Link to='/login'>Already have an account? Sign in now!</Link>
    </div>

    )
}
function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Register)