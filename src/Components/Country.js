import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Country = (props) => {
 const { name } = props.match.params
 const [country, setCountry] = useState([])

 useEffect(() => {
  axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => {
   setCountry(res.data[0])
  })
 }, [name])

 return (
  <div id="country-wrapper">
   <h1 className="country-name">{country.name}</h1>
   <img className="country-flag" alt={country.name} src={country.flag} />

   {/* Add these questions next. Figure out how to map over the multiple objects.
   
   <section>
    <h2 className="questions">
     What languages do we speak?
    </h2>
    <h2 className="answers">
     {languages}
    </h2>
   </section> */}
   {/* 
   <section>
    <h2 className="questions">
     What is the name of our money?
    </h2>
    <h2 className="answers">
     {country.currencies.name[0]}
    </h2>
   </section> */}

   <section>
    <h2 className="questions">
     What is the name of our capital?
    </h2>
    <h2 className="answers">
     {country.capital}
    </h2>
   </section>

   <section>
    <h2 className="questions">
     How many people live here?
    </h2>
    <h2 className="answers">
     {country.population}
    </h2>
   </section>

   <Link to='/countryList'>Back to List of Countries</Link>
  </div>
 )
}
export default Country