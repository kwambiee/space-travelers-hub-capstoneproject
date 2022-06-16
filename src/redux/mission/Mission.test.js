import { MissionReducer } from './mission';

describe('Test reducers, actions and components', () => {
  test('should return the initial state', () => {
    expect(MissionReducer(undefined, {})).toEqual({ missions: [] });
  });

  test('should handle ADD_MISSION', () => {
    const state = { missions: [] };
    const MISSION_ADDED = 'react-app/redux/MISSION_ADDED';
    const fetchmissions = () => ({
      type: MISSION_ADDED,
    });
    expect(MissionReducer(state, fetchmissions)).toEqual({ missions: [] });
  });

  test('should handle JOIN_MISSION', () => {
    const state = {
      missions: [
        {
          mission_id: '9D1B7E0',
        },
      ],
    };
    const JOIN_MISSION = 'react-app/redux/JOIN_MISSION';

    const joinmissions = (id) => ({
      type: JOIN_MISSION,
      payload: id,
    });
    expect(MissionReducer(state, joinmissions('9D1B7E0'))).toEqual({
      missions: [
        {
          mission_id: '9D1B7E0',
          reserved: true,
        },
      ],
    });
  });
  test('should handle LEAVE_MISSION', () => {
    const state = {
      missions: [
        {
          mission_id: '9D1B7E0',
        },
      ],
    };
    const LEAVE_MISSION = 'react-app/redux/LEAVE_MISSION';

    const leavemissions = (id) => ({
      type: LEAVE_MISSION,
      payload: id,
    });
    expect(MissionReducer(state, leavemissions('9D1B7E0'))).toEqual({
      missions: [
        {
          mission_id: '9D1B7E0',
          reserved: false,
        },
      ],
    });
  });
});
