import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkTheme, setDarkTheme] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Aggiorna il tema nel localStorage
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    // Aggiorna la classe del body in base al tema
    document.body.classList.toggle('dark-mode', darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <Container className={darkTheme ? 'dark-background' : 'light-background'}>
        <Welcome darkTheme={darkTheme} />
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/details/:asin" element={<BookDetails darkTheme={darkTheme} />} />
          <Route path="*" element={<NotFound darkTheme={darkTheme} />} />
        </Routes>
      </Container>
      <MyFooter toggleTheme={toggleTheme} darkTheme={darkTheme} />
    </BrowserRouter>
  );
}

export default App;
