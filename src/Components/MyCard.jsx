import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'

const URL = 'api.openweathermap.org/data/2.5/forecast?q=Milan,IT&appid=475b77870dc769f01ba14a3245ab0fc4'



const MyCard = () => {
   const [meteo, setMeteo] = useState()
   const [Error, setError]= useState(false)

fetch (URL)
.then((response) => {
    
    if (response.ok) {
        
        return response.json() 
    } else {
        throw new Error ('la risposta non è ok')
    }
})
.then((data) => {
    console.log(data)
    
})
.catch((err) => {
    console.log('errore' , err)
})

  
}

export default MyCard;