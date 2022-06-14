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
      const index = state.missions.findIndex(
        (obj) => obj.mission_id == action.payload
      );
      const newArr = [...state.missions];
      newArr[index].reserved = true;
      return { ...state, missions: [...newArr] };
    case LEAVE_MISSION:
      const i = state.missions.findIndex(
        (obj) => obj.mission_id == action.payload
      );
      const leaveArr = [...state.missions];
      leaveArr[i].reserved = false;
      return { ...state, missions: [...leaveArr] };
    default:
      return state;
  }
};

export default fetchMission;
