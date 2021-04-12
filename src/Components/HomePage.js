import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './CountryList';


const HomePage = props => {
 const [input, setInput] = useState('')
 const [output, setOutput] = useState([])

 function countryNames() {
  axios.get(`https://restcountries.eu/rest/v2/name/${input}`).then((res) => {
   setOutput(res.data.name)
  })
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

  <button
   onClick={countryNames}
  >Search</button>

  <h3>{output}</h3>


 </div>
 )
}
export default HomePage