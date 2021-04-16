import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../redux/reducer'


const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        axios.post('/auth/login', { email, password })
            .then((res) => {
                props.loginUser(res.data.id, res.data.full_name, res.data.coins)
                props.history.push("/")
            })
        setEmail('')
        setPassword('')
    }

    return (<div id="country-wrapper">

        <h1 className="country-name">Login</h1>

        <p className="answers">Email</p>
        <input
            placeholder="Search for a country"
            className="form__field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="type here..."
            name="email" required
        >
        </input>

        <p className="answers">Password</p>
        <input
            placeholder="Search for a country"
            className="form__field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="type here..."
            name="password" required
        >
        </input>

        <button id="rainbow-1" onClick={login}
        >Sign In</button>

        <Link to="/forgot-password">Forgot your password?</Link>

        <div></div>

        <Link to='/register'>Want to get some coins and spin the slot machine? Create an account now!</Link>

    </div>

    )
}
export default connect(null, { loginUser })(Login)