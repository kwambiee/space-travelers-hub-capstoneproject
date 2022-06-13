const FETCH_ROCKETS = 'react-app/redux/FETCH';

const initialState = { rockets: [] };

export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROCKETS:
      return { rockets: [...payload] };

    default:
      return state;
  }
};

export default rocketReducer;
