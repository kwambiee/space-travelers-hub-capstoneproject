import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
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
            <tr key={mission.mission.id}>
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
