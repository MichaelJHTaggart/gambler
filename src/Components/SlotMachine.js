import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCoins } from '../redux/reducer'

const SlotMachine = props => {

  const [response, setResponse] = useState('')

  useEffect((props) => {
    axios.get(`/auth/coins`).then((res) => {
      props.updateCoins(res.data.coins);
    }).catch(err => console.log(err))
  }, [response])

  function spin() {
    axios.put('/user/spin').then((res) => {
      setResponse(res.data)
      console.log(res)
    })
      .catch(err => console.log(err))
  }

  return (<div>
    <div>
      Message: {response}
    </div>

    <button
      onClick={spin}
    >Spin</button>
  </div>

  )
}
function mapStateToProps(state) {
  return state
}

export default withRouter((connect(mapStateToProps, { updateCoins })(SlotMachine)))