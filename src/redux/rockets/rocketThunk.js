import { fetchRockets } from './rocket';

const fetchRocketThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets')
      .then((data) => data.json());
    const payload = response.map((rocket) => ({
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images.map((image) => ({
        url: image,
      })),
    }));
    dispatch(fetchRockets(payload));
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchRocketThunk;
