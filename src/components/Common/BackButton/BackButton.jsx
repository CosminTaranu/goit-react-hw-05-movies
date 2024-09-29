import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import styles from './BackButton.module.css';


const BackButton = () => {
  const location = useLocation();
  const backButtonHref = location.state?.from ?? `/movies`;

  return (
    <div className={styles.backLink}>
      <Link to={backButtonHref}>
        <BiArrowBack />
        <span>Back to Trending</span>
      </Link>
    </div>
  );
};

export default BackButton;

