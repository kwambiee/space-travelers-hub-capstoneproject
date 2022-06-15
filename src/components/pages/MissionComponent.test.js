import React from "react";
import { shallow, configure } from "enzyme";
import Missions from "./Mission";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Missions />);
});

it("renders missions", () => {
  const wrapper = shallow(<Missions />);
  const MissionTest = (
    <table>
      <thead>
        <th>Titles</th>
      </thead>
      <tbody>
        <td>Mission Name</td>
        <td>Mission Description</td>
      </tbody>
      Display Active Users Account Details
    </table>
  );
  expect(wrapper.contains(MissionTest)).toEqual(true);
});
