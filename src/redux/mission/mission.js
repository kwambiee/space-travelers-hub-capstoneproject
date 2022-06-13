import axios from "axios";

const fetchMission = () => async (dispatch) => {
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((response) => console.log(response.data))
    .then((err) => err.message);
};
fetchMission();

export default fetchMission;
