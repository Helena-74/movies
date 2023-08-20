import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useLocation, Link, Route} from 'react-router-dom';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../components/api';

const MovieDetailsContainer = styled.div`
  margin: 20px;
`;

const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieData, setMovieData] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId).then((data) => {
        setMovieData(data);
      });
      getMovieCredits(movieId).then((data) => {
        setCast(data.cast);
      });
      getMovieReviews(movieId).then((data) => {
        setReviews(data.results);
      });
    }
  }, [movieId]);

  const backLink = location.state?.from ?? '/movies';

  return (
    <MovieDetailsContainer>
      <StyledHeader>{movieData.title}</StyledHeader>
      <StyledLink to={backLink}>Back</StyledLink>
      <p>{movieData.overview}</p>

        <Route path="/movies/:movieId/cast">
          <Cast cast={cast} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews reviews={reviews} />
        </Route>
        <Route path="*" element={backLink} />
    </MovieDetailsContainer>
  );
};

export default MovieDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation, Link, Route, Switch, Redirect } from 'react-router-dom';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
// import { getMovieDetails, getMovieCredits, getMovieReviews } from '../api'; 

// function MovieDetails() {
//   const { movieId } = useParams();
//   const location = useLocation();

//   const [movieData, setMovieData] = useState({});
//   const [cast, setCast] = useState([]);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     if (movieId) {
//       getMovieDetails(movieId).then((data) => {
//         setMovieData(data);
//       });
//       getMovieCredits(movieId).then((data) => {
//         setCast(data.cast);
//       });
//       getMovieReviews(movieId).then((data) => {
//         setReviews(data.results);
//       });
//     }
//   }, [movieId]);

//   const backLink = location.state?.from ?? '/movies';

//   return (
//     <div>
//       <h2>{movieData.title}</h2>
//       <Link to={backLink}>Back</Link>
//       <p>{movieData.overview}</p>

//       <Switch>
//         <Route path="/movies/:movieId/cast">
//           <Cast cast={cast} />
//         </Route>
//         <Route path="/movies/:movieId/reviews">
//           <Reviews reviews={reviews} />
//         </Route>
//         <Redirect to={backLink} />
//       </Switch>
//     </div>
//   );
// }

// export default MovieDetails;

