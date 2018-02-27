import { MyApp } from '../../router/router';

const navigationReducer = (state, action) => {
  const newState = MyApp.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
