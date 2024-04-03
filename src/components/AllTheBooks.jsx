import { Col, Row } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { useState } from 'react';

const AllTheBooks = ({ searchQuery, darkTheme }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Row>
      <Col md={8} text={darkTheme ? 'light' : 'dark'}>
        <Row className="g-2 mt-3" bg={darkTheme ? 'dark' : 'light'} data-bs-theme={darkTheme ? 'dark' : 'light'}>
          {fantasy
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin} text={darkTheme ? 'light' : 'dark'}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              );
            })}
        </Row>
      </Col>
      <Col md={4} text={darkTheme ? 'light' : 'dark'}>
        <CommentArea asin={selected} />
      </Col>
    </Row>
  );
};

export default AllTheBooks;
