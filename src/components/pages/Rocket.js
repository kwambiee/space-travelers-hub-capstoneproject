import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = (props) => {
  const { rocketName, description, flickrImages } = props;
  return (
    <div className="rocket-card">
      <img src={flickrImages} width={200} height={200} alt={rocketName} />
      <div className="rocket-card-content">
        <h1>
          {' '}
          {rocketName}
        </h1>
        <p>{description}</p>
        <button type="button" className="rocket-button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketCard;
