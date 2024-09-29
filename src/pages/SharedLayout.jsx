import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import FallbackLoader from 'components/Common/FallbackLoader/FallbackLoader';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.navContainer}>
        <nav className={styles.navItems}>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
          <NavLink to="movies" className="navLink">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<FallbackLoader>Loading page ...</FallbackLoader>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
