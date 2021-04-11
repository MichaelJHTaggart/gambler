import React, { useState } from 'react'
import axios from 'axios'

const SlotMachine = props => {

  const [response, setResponse] = useState('')


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
export default SlotMachine