import { NavLink } from 'react-router-dom';
import styles from './MovieAdditionalInfo.module.css';

const MovieAdditionalInfo = () => {
  return (
    <section className={`container ${styles.additional}`}>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default MovieAdditionalInfo;
