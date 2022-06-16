import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import HomePage from '../components/pages/Home';
import '@testing-library/jest-dom/extend-expect';

const RocketsProvider = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

describe('Check Homepage', () => {
  it('renders correctly', () => {
    const component = renderer.create(<RocketsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('No Rockets Available', () => {
  it('renders correctly', () => {
    render(<RocketsProvider />);
    expect(screen.getByText('No rockets available')).toBeInTheDocument();
  });
});

describe('Rockets Component', () => {
  it('renders rockets', () => {
    const allRockets = renderer.create(<RocketsProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });

  test('Reserve a rocket and cancel reservation', async () => {
    render(<RocketsProvider />);
    const reserveButton = await screen.findAllByText('Reserve Rocket');
    const badges = await screen.findAllByText('Reserved');
    expect(reserveButton[0].textContent).toBe('Reserve Rocket');
    fireEvent.click(reserveButton[0]);
    expect(badges[0].textContent).toBe('Reserved');
    expect(reserveButton[0].textContent).toBe('Cancel Reservation');
  });
});