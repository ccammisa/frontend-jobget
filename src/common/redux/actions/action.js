import axios from 'axios';
import { SEARCH_API_URL, API_KEY } from '../../utils/constants';
import { setErrors } from './errors';

export const getJobs = ({keyword, location, radius, page = 1}) => {
  return async (dispatch) => {
    try {
      keyword = keyword ? encodeURIComponent(keyword) : '';
      location = location ? encodeURIComponent(location) : '';

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
      }
      if (radius)
      {
        radius = `&radius_miles=${radius}`
      }

      const jobs = await axios.get(
        `${SEARCH_API_URL}?search=${keyword}&location=${location}&jobs_per_page=100${page}${radius}&api_key=${API_KEY}`
      );

      const sortResultsByDate = jobs.data.jobs.sort(
        (a, b) =>
          b.posted_time - a.posted_time
      );

      return dispatch(setJobs(sortResultsByDate));
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
      console.log("error", error.response.data)
    }
  };
};

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  jobs
});

export const setLoadMoreJobs = (jobs) => ({
  type: 'LOAD_JOBS',
  jobs
});
