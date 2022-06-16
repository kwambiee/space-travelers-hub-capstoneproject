import rocketReducer from '../redux/rockets/rocket';

describe('Test reducers, actions and components', () => {
  test('should return the initial state', () => {
    expect(rocketReducer(undefined, {})).toEqual({ rockets: [] });
  });

  test('should handle FETCH_ROCKETS', () => {
    const state = { rockets: [] };
    const FETCH_ROCKETS = 'react-app/redux/FETCH';
    const fetchRockets = () => ({
      type: FETCH_ROCKETS,
    });
    expect(rocketReducer(state, fetchRockets)).toEqual({ rockets: [] });
  });

  test('should handle TOGGLE_RESERVE', () => {
    const state = { rockets: [] };
    const TOGGLE_RESERVE = 'react-app/redux/RESERVE';
    const reserveRocket = () => ({
      type: TOGGLE_RESERVE,
    });
    expect(rocketReducer(state, reserveRocket)).toEqual({ rockets: [] });
  });
});
