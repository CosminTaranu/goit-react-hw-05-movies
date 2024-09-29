import PropTypes from 'prop-types';
import styles from './CastCard.module.css';

const CastCard = ({ castData }) => {
  const Base_Image_Url = 'https://image.tmdb.org/t/p/w342';
  const Fallback_Image_url =
    'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=';

  return (
    <div className={styles.castList}>
      {castData.map(item => (
        <div key={item.id} className={styles.castCard}>
          <div>
            <img
              src={
                item?.profile_path
                  ? `${Base_Image_Url}${item.profile_path}`
                  : `${Fallback_Image_url}`
              }
              alt="character-poster"
            />
          </div>
          <div className={styles.castInfo}>
            <div>
              <p>Character:</p>
              <p>{item.character || 'missing'}</p>
            </div>
            <div>
              <p>Name:</p>
              <p>{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CastCard.propTypes = {
  castData: PropTypes.array.isRequired,
};

export default CastCard;
