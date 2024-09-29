import PropTypes from 'prop-types';

const FallbackLoader = ({ children }) => {
  return (
    <section className="container">
      <h2>{children}</h2>
    </section>
  );
};

FallbackLoader.propTypes = {
  children: PropTypes.string,
};

export default FallbackLoader;
