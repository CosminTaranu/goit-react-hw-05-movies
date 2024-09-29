import ErrorAlert from 'components/Common/ErrorAlert/ErrorAlert';
import Loader from 'components/Common/Loader/Loader';
import MoviesList from 'components/Common/MovieList/MovieList';
import { useEffect, useState } from 'react';
import moviesService from 'service/moviesService';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await moviesService.getTrending();

        if (data.results.length === 0) {
          setError(`We are sorry. There is no data"`);
          return;
        }

        setTrendingMovies(data.results);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <section className="container">
      <h2>Trending today</h2>

      {trendingMovies && <MoviesList movies={trendingMovies} />}
      {error && <ErrorAlert error={error} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default HomePage;
