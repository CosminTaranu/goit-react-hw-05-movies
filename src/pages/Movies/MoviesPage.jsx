import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesService from 'service/moviesService';
import SearchBar from './SearchBar';
import MoviesList from 'components/Common/MovieList/MovieList';
import ErrorAlert from 'components/Common/ErrorAlert/ErrorAlert';
import Loader from 'components/Common/Loader/Loader';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await moviesService.getSearchedMovies(query);

        if (data.results.length === 0) {
          setError(`We are sorry. There is no movie for your searched term`);
        }

        setSearchedMovies(data.results);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    query && getMovies();
  }, [query]);

  const onFormSubmit = searchedTerm => {
    setSearchParams({ query: searchedTerm });
    setSearchedMovies(null);
    setError(null);
  };

  return (
    <>
      <section className="container">
        <SearchBar onFormSubmit={onFormSubmit} />

        {searchedMovies && <MoviesList movies={searchedMovies} />}
        {error && <ErrorAlert error={error} />}
        {isLoading && <Loader />}
      </section>
    </>
  );
};
export default MoviesPage;
