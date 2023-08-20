import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Routes>
      <GlobalStyle />
      <AppContainer>
        <Suspense fallback={<div>Loading...</div>} >
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="Reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Route>
        <Route path="*" element={<Home />} />
        </Suspense>
      </AppContainer>
    </Routes>
  );
};

export default App;

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/movies" exact component={Movies} />
//           <Route path="/movies/:movieId" exact component={MovieDetails} />
//           <Route path="/movies/:movieId/cast" exact component={Cast} />
//           <Route path="/movies/:movieId/reviews" exact component={Reviews} />
//           <Redirect to="/" />
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// {/* <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="Reviews" element={<Reviews />} />
//             <Route path="cast" element={<Cast />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<Home />} /> */}
//                     {/* <Route path="/" exact component={Home} />
//             <Route path="/movies" exact component={Movies} />
//             <Route path="/movies/:movieId" exact component={MovieDetails} />
//             <Route path="/movies/:movieId/cast" exact component={Cast} />
//             <Route path="/movies/:movieId/reviews" exact component={Reviews} />
//             <Redirect to="/" /> */}