import React from "react";
import { Provider } from "react-redux";
import Missions from "../components/pages/Mission";
import renderer from "react-test-renderer";
import store from "./configureStore";

const MissionsProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe("Check Mission page", () => {
  it("renders correctly", () => {
    const component = renderer.create(<MissionsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
