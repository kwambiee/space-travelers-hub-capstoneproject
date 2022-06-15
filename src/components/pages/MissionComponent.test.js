import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Missions from "./Mission";

configure({ adapter: new Adapter() });

describe("Test App Entry point", function () {
  it("should have a header tag with Hello world React!", function () {
    const wrapper = shallow(<Missions />);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});
