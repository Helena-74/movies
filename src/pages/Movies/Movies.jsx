import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MoviesList from '../../components/Movies/MoviesList';
import SearchForm from '../../components/Movies/SearchForm';
import { getTrendingMovies } from '../../components/api'; 

const MoviesContainer = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data.results);
    });
  }, []);

  const handleSubmit = (value) => {
    setSearchQuery(value);
  };

  return (
    <MoviesContainer>
      <StyledHeader>Movies Page</StyledHeader>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList searchQuery={searchQuery} trendingMovies={trendingMovies} />
    </MoviesContainer>
  );
};

export default Movies;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import MoviesList from './MoviesList';
// import SearchForm from './SearchForm';

// const MoviesContainer = styled.div`
//   margin: 20px;
// `;

// const StyledHeader = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSubmit = (value) => {
//     setSearchQuery(value);
//   };

//   return (
//     <MoviesContainer>
//       <StyledHeader>Movies Page</StyledHeader>
//       <SearchForm onSubmit={handleSubmit} />
//       <MoviesList searchQuery={searchQuery} />
//     </MoviesContainer>
//   );
// };

// export default Movies;

// import React, { useState } from 'react';
// import MoviesList from './MoviesList';
// import SearchForm from './SearchForm';

// function Movies() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSubmit = (value) => {
//     setSearchQuery(value);
//   };

//   return (
//     <div>
//       <h2>Movies Page</h2>
//       <SearchForm onSubmit={handleSubmit} />
//       <MoviesList searchQuery={searchQuery} />
//     </div>
//   );
// }

// export default Movies;

