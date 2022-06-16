/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Missions from '../components/pages/Mission';
import store from './configureStore';

const MissionsProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Check Mission page', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MissionsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

// test("Reserve a rocket and cancel reservation", async () => {
//   render(<MissionsProvider />);
//   const joinButton = await screen.findAllByText("Join Mission");
//   const badges = await screen.findAllByText("Active Member");
//   expect(joinButton[0].textContent).toBe("Join Mission");
//   fireEvent.click(joinButton[0]);
//   expect(badges[0].textContent).toBe("Active Member");
//   expect(Button[0].textContent).toBe("Leave Mission");
// });

// import { render, screen, fireEvent } from "@testing-library/react";

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

test('calls leave Mission function when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Join Mission</Button>);
  fireEvent.click(screen.getByText(/join mission/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('calls join Mission function when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Leave Mission</Button>);
  fireEvent.click(screen.getByText(/leave mission/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
