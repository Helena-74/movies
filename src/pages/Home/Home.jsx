import React, { useState, useEffect }from 'react';
import MoviesList from '../../components/Movies/MoviesList';
import Home, { HomeContainer, StyledHeader } from '../Home/Home.styled'

// import styled from 'styled-components';
import { searchMovies } from 'components/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      if (searchQuery) {
        searchMovies(searchQuery).then((data) => {
          setMovies(data.results);
        });
      }
    }, [searchQuery]);
  
  }
  return (
    <HomeContainer>
      <StyledHeader>Home Page</StyledHeader>
      <MoviesList movies={movies} />
    </HomeContainer>
  );


export default Home;


