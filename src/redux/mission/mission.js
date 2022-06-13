import axios from "axios";

const MISSION_ADDED = "react-app/redux/MISSION_ADDED";

const AddMission = (mission) => ({
  type: MISSION_ADDED,
  payload: mission,
});

const fetchMission = () => async (dispatch) => {
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((response) => console.log(response.data))
    .then((err) => err.message);
};
fetchMission();

export default fetchMission;
