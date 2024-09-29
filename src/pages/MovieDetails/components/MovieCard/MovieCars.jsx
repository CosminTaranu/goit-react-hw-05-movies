import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ movieDetails }) => {
  const { title, overview, genres, poster_path, release_date } = movieDetails;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=';

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieimage}>
        <img src={imageUrl} alt="movies poster" />
      </div>
      <div>
        <h1 className={styles.movieTitle}>{title}</h1>

        <div className={styles.release_date}>
          <p>Release Year: </p>
          <p>{new Date(release_date).getFullYear()}</p>
        </div>

        <div className={styles.genres}>
          <p>Genres: </p>
          <p>{genres.map(item => item.name).join(', ')}</p>
        </div>

        <div className={styles.runtime}>
          <p>Runtime: </p>
          <p>{movieDetails.runtime} minutes</p>
        </div>

        <div className={styles.overview}>
          <p>Overview</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};

export default MovieCard;
