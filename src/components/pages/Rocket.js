import React from 'react';

const RocketCard = (props) => {
  const {
    rocketName, description, flickrImages,
  } = props;
  return (
    <div className="rocket-card">
      <img src={flickrImages} width={200} height={200} alt={rocketName} />
    </div>
  );
}


export default RocketCard;
