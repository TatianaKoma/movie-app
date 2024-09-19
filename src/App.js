import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const FEATURED_API = `https://swapi.dev/api/films`;

function App() {
  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      let res = await fetch(FEATURED_API);
      let data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }
    fetchMovies();
    setLoading(false);
  }, [])

    return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/films' element={
            <div className='movie-container'>
                { movies.length > 0 && movies.map((movie) => (
           <Movie key={movie.episode_id} {...movie} />))}
            </div>} />
          </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
