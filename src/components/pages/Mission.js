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
          <tr>
            <td>Thaicom</td>
            <td>
              The Missions section displays a list of current missions along
              with their brief description and participation status. There is
              also a button next to each mission that allows users to join the
              selected mission or leave the mission the user joined earlier.
            </td>
            <td>
              <div>
                <h6>not a member</h6>
              </div>
            </td>
            <td>
              <button type='button'>Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
