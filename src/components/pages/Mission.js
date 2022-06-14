import React from "react";
import { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import fetchMission from "../../redux/mission/mission";

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("kwambiee");
    dispatch(fetchMission());
  }, []);

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
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <div>
                  <h6>not a member</h6>
                </div>
              </td>
              <td>
                <button type='button'>Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
