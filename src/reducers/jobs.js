import { FETCH_JOBS } from '../actions/types';

const INITIAL_STATE = {
  jobs: [],
  total: 0
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      const {jobs, total_num: total } = action.payload.data;
      return {...state, jobs, total};
    default:
      return state;
  }
}