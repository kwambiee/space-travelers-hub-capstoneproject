import PropTypes from 'prop-types';
import './profile.css';

const MyRockets = ({ data }) => (
  <ul className="profile-items">
    {data.length === 0 ? (
      <li className="profile-item">
        No rocket reserved yet
      </li>
    ) : data.map(({ id, rocketName }) => (
      <li className="profile-item" key={id}>
        <div>
          <span>{rocketName}</span>
        </div>
      </li>
    ))}
  </ul>
);

MyRockets.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default MyRockets;
