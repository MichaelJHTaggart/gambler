import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector, connect } from 'react-redux';
import { loginUser, logout } from '../redux/reducer'


const Header = props => {
  const user_id = useSelector(state => state.user_id)
  const name = useSelector(state => state.name)
  const coins = useSelector(state => state.coins)

  function logoutUser() {
    axios.delete('/auth/logout')
      .then((res) => {
        props.logout()
      })
      .catch(err => console.log(err))
  }


  return (
    <div>

      <button>See all countries</button>

      <div>
        <h3>Coins: {coins}</h3>
      </div>

      {(!user_id)
        ?
        (
          <ol>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register' >Register</Link></li>
          </ol>
        )
        :
        (
          <ol>
            <li>{`Hello ${name}`}</li>
            <Link
              to='/'
              onClick={logoutUser}
            >
              Logout
          </Link>

          </ol>
        )}
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user_id,
    name: reduxState.user.name
  }
}

export default withRouter((connect(mapStateToProps, { loginUser, logout })(Header)))