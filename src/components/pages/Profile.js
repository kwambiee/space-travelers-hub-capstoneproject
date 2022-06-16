import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyRockets from "./reservedRocket";

const Profile = () => {
  const [missionJoined, setMissionJoined] = useState([]);
  const missionsApi = useSelector((state) => state.MissionReducer.missions);

  const reserveMission = () => {
    const joined = missionsApi.filter((mission) => mission.reserved === true);
    setMissionJoined(joined);
  };
  useEffect(() => {
    reserveMission();
  }, []);

  const rocketState = useSelector(
    (state) => state.rocketReducer.rockets
  ).filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div className='profile-container'>
        <span className='profile-missions'>
          <h2>My Missions</h2>
          <ul>
            {missionJoined.map((mission) => (
              <li className='profile-item' key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        </span>

        <span className='profile-rockets'>
          <h2>My Rockets</h2>
          <ul>
            <MyRockets data={rocketState} />
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Profile;
