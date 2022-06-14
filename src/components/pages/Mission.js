import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import fetchMission, {
  joinMission,
  leaveMission,
} from "../../redux/mission/mission";

export default function Missions() {
  const [missionStatus, setMissionStatus] = useState({
    status: "NOT A MEMBER",
    action: "Join Mission",
  });

  const missionsApi = useSelector((state) => state.MissionReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  const handleClick = (id) => {
    setMissionStatus(() => ({
      ...missionStatus,
      status: "ACTIVE MEMBER",
      action: "Leave Mission",
    }));
    dispatch(leaveMission(id));

    dispatch(joinMission(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {missionsApi.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <div>
                  <h6>{missionStatus.status}</h6>
                </div>
              </td>
              <td>
                <button type='button' onClick={handleClick}>
                  {missionStatus.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
