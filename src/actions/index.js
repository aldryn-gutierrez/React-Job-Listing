import axios from 'axios';
import { FETCH_JOBS } from './types';

const JOBS_PER_PAGE = 12;

export const fetchJobs = (term, page = 1) => async dispatch => {
  const response = await axios.get(
    `http://search.bossjob.com/api/v1/search/job_filter?size=${JOBS_PER_PAGE}&query=${term}&page=${page}`
  );

  dispatch({ type: FETCH_JOBS, payload: response.data })
}
