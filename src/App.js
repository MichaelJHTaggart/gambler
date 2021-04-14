import React, { useEffect } from 'react'
import routes from './Routes'
import Header from './Components/Header'
import axios from 'axios'
import '../src/scss/main.scss'


import { connect } from 'react-redux';
import { loginUser } from './redux/reducer'

const App = (props) => {
  useEffect(() => {
    axios.get(`/auth/user`).then((res) => {
      props.loginUser(res.data.id, res.data.full_name, res.data.coins);
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}
function mapStateToProps(reduxState) {
  return reduxState
}
export default connect(mapStateToProps, { loginUser })(App)