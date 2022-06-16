import React from "react";
import "./mission.css";
import { useSelector, useDispatch } from "react-redux";
import { joinMission, leaveMission } from "../../redux/mission/mission";

export default function Missions() {
  const missionsApi = useSelector((state) => state.MissionReducer.missions);
  const dispatch = useDispatch();

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div>
      <table className='table-container'>
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
              <td style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {mission.mission_name}
              </td>
              <td>{mission.description}</td>
              <td>
                <div className='reserve'>
                  {mission.reserved ? (
                    <h6
                      style={{
                        backgroundColor: "cyan",
                        border: "2px solid transparent",
                        borderRadius: "2px",
                        fontSize: "1rem",
                      }}
                    >
                      ACTIVE MEMBER
                    </h6>
                  ) : (
                    <h6
                      style={{
                        backgroundColor: "#807f7f",
                        border: "2px solid transparent",
                        borderRadius: "2px",
                        fontSize: "1rem",
                      }}
                    >
                      NOT A MEMBER
                    </h6>
                  )}
                </div>
              </td>
              <td className='Buttons'>
                {mission.reserved ? (
                  <button
                    type='button'
                    style={{
                      border: "2px dotted red",
                      borderRadius: "2px",
                      color: "red",
                      margin: "1rem",
                      padding: "0.5rem",
                    }}
                    onClick={() => handleLeave(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type='button'
                    style={{
                      borderRadius: "2px",
                      margin: "1rem",
                      padding: "0.5rem",
                    }}
                    onClick={() => handleJoin(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
