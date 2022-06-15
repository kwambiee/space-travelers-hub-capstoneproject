import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

  return (
    <div>
      <div className="profileTitles">
        <span>
          <h2>My Missions</h2>
          <ul>
            {missionJoined.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        </span>

        <span>
          <h2>My Rockets</h2>
          <ul>
            <li>Falcon 9</li>
            <li>Falcon Heavy</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Profile;
