import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMoviesHandler() {
    // Fetch the API, take the JSON response body into a JS object 
    fetch('https://swapi.dev/api/films/')
      .then(response => {
      /* .json() is a built-in method on the response object 
      that transaforms automatically the JSON data in a JS object */ 
      // Return a promise
        return response.json(); 
      })
      .then(data => {
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_data
          };
        });
        setMovies(transformedMovies);
      });  
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
