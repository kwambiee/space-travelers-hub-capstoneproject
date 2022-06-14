import axios from "axios";

const MISSION_ADDED = "react-app/redux/MISSION_ADDED";
const MISSION_FAILURE = "react-app/redux/MISSION_FAILURE";
const JOIN_MISSION = "react-app/redux/JOIN_MISSION";
const LEAVE_MISSION = "react-app/redux/LEAVE_MISSION";

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
  await axios.get("https://api.spacexdata.com/v3/missions").then(
    (response) => dispatch(AddMission(response.data)),
    (err) => dispatch({ type: MISSION_FAILURE, err })
  );
};

const InitialState = { missions: [] };

export const MissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MISSION_ADDED:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      const joinState = state.filter(
        (Amission) => Amission.id !== action.payload
      );
      return { ...joinState, reserved: true };
    case LEAVE_MISSION:
      const leaveState = state.filter(
        (Amission) => Amission.id !== action.payload
      );
      return { ...leaveState, reserved: false };
    default:
      return state;
  }
};

export default fetchMission;
