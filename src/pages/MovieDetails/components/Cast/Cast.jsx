import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesService from 'service/moviesService';
import CastCard from './CastCard';
import ErrorAlert from 'components/Common/ErrorAlert/ErrorAlert';
import Loader from 'components/Common/Loader/Loader';

const Cast = () => {
  const [castData, setCastData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await moviesService.getMovieCredits(movieId);

        if (data.cast.length === 0) {
          setError(`We are sorry. There is no details about the cast`);
          return;
        }

        const castData = data.cast.splice(0, 18);

        setCastData(castData);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <section className="container">
      {castData && <CastCard castData={castData} />}
      {error && <ErrorAlert error={error} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default Cast;
