import React, { useState } from 'react';
import axios from 'axios';


const HomePage = props => {
 const [input, setInput] = useState('')

 const onSubmit = (data) => {
  console.log(data)
 }

 function submit(){
  
 }

 return (<div>

  <form>
   <input
    placeholder="Search for a country"
    type="text"
    value={input}
    onChange={e => setInput(e.target.value)}
   ></input>

  </form>

  <button>Search</button>

 </div>
 )
}
export default HomePage