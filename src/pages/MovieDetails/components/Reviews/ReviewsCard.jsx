import PropTypes from 'prop-types';
import styles from './ReviewsCard.module.css';

const ReviewsCard = ({ reviewsData }) => {
  return (
    <div>
      {reviewsData.map(item => (
        <div key={item.id} className={styles.reviewsCard}>
          <div>
            <p>Author: </p>
            <p>{item.author}</p>
          </div>
          <p className={styles.content}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

ReviewsCard.propTypes = {
  reviewsData: PropTypes.array,
};
export default ReviewsCard;
