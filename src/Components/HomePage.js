import React, { useState } from 'react';
import axios from 'axios';


const HomePage = props => {
 const [input, setInput] = useState('')
 const [output, setOutput] = useState([])

 function countryNames() {
  axios.get(`https://restcountries.eu/rest/v2/name/${input}`).then((res) => {
   setOutput(res.data)
  })
 }
 console.log(input)
 console.log(output)

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



  {/* {output.map((country) => {
   return (
    <Link key={country.name} to={`/${country.name}`}>
     <h2>{country.name}</h2>
    </Link>
   )
  })} */}
 </div>
 )
}
export default HomePage