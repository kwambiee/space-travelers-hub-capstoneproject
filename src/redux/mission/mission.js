import axios from 'axios';

const MISSION_ADDED = 'react-app/redux/MISSION_ADDED';
const MISSION_FAILURE = 'react-app/redux/MISSION_FAILURE';
const JOIN_MISSION = 'react-app/redux/JOIN_MISSION';
const LEAVE_MISSION = 'react-app/redux/LEAVE_MISSION';

const AddMission = (mission) => ({
  type: MISSION_ADDED,
  payload: mission,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const fetchMission = () => async (dispatch) => {
  await axios.get('https://api.spacexdata.com/v3/missions').then(
    (response) => dispatch(AddMission(response.data)),
    (err) => dispatch({ type: MISSION_FAILURE, err }),
  );
};

const InitialState = { missions: [] };

export const MissionReducer = (state = InitialState, { type, payload }) => {
  // const Index = state.missions.findIndex(
  //   (obj) => obj.mission_id === action.payload,
  // );
  // const newArr = [...state.missions];
  // const Arr = state.missions.findIndex(
  //   (obj) => obj.mission_id === action.payload,
  // );
  // const leaveArr = [...state.missions];

  switch (type) {
    case MISSION_ADDED:
      return { missions: [...payload] };

    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== payload) return mission;
          return { ...mission, reserved: true };
        }),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== payload) return mission;
          return { ...mission, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default fetchMission;

// ...state,
//         rockets: state.rockets.map((rocket) => {
//           if (rocket.id !== payload) return rocket;
//           return { ...rocket, reserved: !rocket.reserved };
//         }),
//       };
