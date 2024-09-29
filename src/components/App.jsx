import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout';
// import MoviesPage from 'pages/Movies/MoviesPage';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFoundPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const Cast = lazy(() => import('pages/MovieDetails/components/Cast/Cast'));
const Reviews = lazy(() =>
  import('pages/MovieDetails/components/Reviews/Reviews')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
