import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { ImFilm } from 'react-icons/im';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.trendingList}>
      {movies.map(item => (
        <li key={item.id} className={styles.movieItem}>
          <ImFilm className={styles.icon} />
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
