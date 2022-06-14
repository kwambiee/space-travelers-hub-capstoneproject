import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './Rocket';

const HomePage = () => {
  const data = useSelector((state) => state.rocketReducer.rockets);
  if (data.length === 0) {
    return (
      <>
        <ul>
          <li>
            <h1>No rockets available</h1>
          </li>
        </ul>
      </>
    );
  }
  return (
    <ul>
      {data.map(({
        id, rocketName, description, flickrImages, reserved,
      }) => (
        <RocketCard
          key={id}
          rocketName={rocketName}
          description={description}
          flickrImages={flickrImages}
          reserved={reserved}
          id={id}
        />
      ))}
    </ul>
  );
};

export default HomePage;
