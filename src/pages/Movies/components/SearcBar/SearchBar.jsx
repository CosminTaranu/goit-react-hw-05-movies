import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const SearchBar = ({ onFormSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchedTerm = form.search.value.trim();

    if (!searchedTerm) {
      alert('Please, write something !');
      return;
    }

    onFormSubmit(searchedTerm);
    form.reset();
  };

  return (
    <div className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles['SearchForm-input']}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={styles['SearchForm-button']}>
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
