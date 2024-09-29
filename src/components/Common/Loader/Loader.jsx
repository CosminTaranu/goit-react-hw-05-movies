import { RotatingLines } from "react-loader-spinner";
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="2"
            ariaLabel="rotating-lines-loading"
            wrapperClass={styles.Loader}
        />

  );
};

export default Loader;
