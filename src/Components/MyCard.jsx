import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const URL = 'api.openweathermap.org/data/2.5/forecast?q=Milan,IT&appid=475b77870dc769f01ba14a3245ab0fc4'



function MyCard() {

fetch (URL)
.then((response) => {
    
    if (response.ok) {
        
        return response.json() 
    } else {
        throw new Error ('la risposta non è ok')
    }
})
.then((arrayOfObject) => {
    return (
        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="." />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    
})

  
}

export default MyCard;