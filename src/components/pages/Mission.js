import React from 'react';
import './styles.css';

export default function Missions() {
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
              <button type="button">Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
