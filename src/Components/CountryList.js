import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryList = (props) => {
 const [list, setList] = useState([])

 useEffect(() => {
  axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
   setList(res.data)
  })
 }, [])

 return (<div id="content">
  {list.map((country) => {
   return (
    <Link className="list" key={country.name} to={`/${country.name}`}>
     <h2 className="list">{country.name}</h2>
    </Link>
   )
  })}
 </div>
 )
}

export default CountryList