import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moviesService from 'service/moviesService';
import ReviewsCard from './ReviewsCard';
import ErrorAlert from 'components/Common/ErrorAlert/ErrorAlert';
import Loader from 'components/Common/Loader/Loader';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await moviesService.getMovieReviews(movieId);

        if (data.results.length === 0) {
          setError(`We are sorry. There is no review`);
          return;
        }

        const reviewsData = data.results.splice(0, 3);

        setReviewsData(reviewsData);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <section className="container">
      {reviewsData && <ReviewsCard reviewsData={reviewsData} />}
      {error && <ErrorAlert error={error} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default Reviews;
