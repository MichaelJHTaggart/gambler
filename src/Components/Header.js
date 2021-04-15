import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logout } from '../redux/reducer'

/* Header needs the following:
-full_name of person on the account
-Amount of coins in the persons account


Needs to show the information from the store & 
*/

const Header = props => {

  function logoutUser() {
    axios.delete('/auth/logout')
      .then((res) => {
        props.logout()
      })
      .catch(err => console.log(err))
  }

  return (
    <header id="content">
      <Link className="link-text" to='/countryList'> See all countries</Link>
      <div className="slotmachine-nav header-item">
        <Link className="link-text" to='/slotmachine'>
          <h3>Coins: {props.coins}</h3>
        </Link>
      </div>

      {
        props.id === ''
          ?
          (
            <ol className="link-text">
              <li className="header-item"><Link className="link-text" to='/login'>Login</Link></li>
              <li className="header-item"><Link className="link-text" to='/register' >Register</Link></li>
            </ol>
          )
          :
          (
            <ol className="link-text">
              <Link className="link-text" className="link header-item" to='/'>{`Hello ${props.full_name}`}
              </Link>
              <button className="link-text"
                to='/'
                onClick={logoutUser}
              >
                Logout
              </button>
            </ol>
          )
      }
    </header >
  )
}

function mapStateToProps(state) {
  return state
}

export default withRouter((connect(mapStateToProps, { loginUser, logout })(Header)))