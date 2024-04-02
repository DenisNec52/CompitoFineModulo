import { Card, Col, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy.json'
import { useState } from 'react';
import '../Styles/BookDetailsStyle.css';

const BookDetails = ({ updateNavbar }) => {
  const params = useParams()
  const foundBook = fantasy.find((book) => book.asin === params.asin)
  const [addedToCart, setAddedToCart] = useState(false);
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    console.log('Libro aggiunto al carrello:', foundBook.title);
    setAddedToCart(true);
    setInCart(true);
    // Aggiungi il libro al carrello
    updateNavbar(foundBook); // Passa il libro aggiunto come argomento
  }

  const removeFromCart = () => {
    console.log('Libro rimosso dal carrello:', foundBook.title);
    setAddedToCart(false);
    setInCart(false);
    updateNavbar();
  }

  return (
    <Row className="justify-content-center">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {foundBook.title}
            </Card.Title>
            <Card.Text className='text-center font-weight-bold font-thickness1'>
              Category: {foundBook.category}
            </Card.Text>
            <Card.Text className='text-center font-weight-bold font-thickness2'>
              Price: ${foundBook.price}
            </Card.Text>
            <div className="text-center">
              {addedToCart ? (
                <>
                  <Button variant="danger" onClick={removeFromCart}>Rimuovi dal carrello</Button>
                </>
              ) : (
                <Button variant="primary" onClick={addToCart}>Aggiungi al carrello</Button>
              )}
            </div>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails;
