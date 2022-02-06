const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs;
    case 'LOAD_JOBS':
      return [...state, ...action.jobs];
    default:
      return state;
  }
};
export default jobsReducer;