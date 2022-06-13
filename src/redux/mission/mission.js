import axios from "axios";

const MISSION_ADDED = "react-app/redux/MISSION_ADDED";
const MISSION_FAILURE = "react-app/redux/MISSION_FAILURE";

const AddMission = (mission) => ({
  type: MISSION_ADDED,
  payload: mission,
});

const fetchMission = () => async (dispatch) => {
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((response) => dispatch(AddMission(response.data)))
    .then((err) => dispatch({ type: MISSION_FAILURE, err }));
};

const InitialState = [];

export const MissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MISSION_ADDED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fetchMission;
