import {
  USER_INIT,
  SIGNUP,
  USER_LOGOUT,
  SWITCHCHECKBOX
} from './actions';

const INITIAL_USER_STATE = { 
  userFetched: null,
  saveCreds: true,
  userCredsSignIn: {
    email: 'test_first@test.com',
    password: 'test_first'
  },
}

export default firebaseConnection = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case USER_INIT:
      var {user, email, password} = action.payload;
      return {
        ...state,
        userFetched: user,
        userCredsSignIn: {
          email,
          password
        }
      }
    case SIGNUP:
      var {user, email, password} = action.payload;
      return {
        ...state,
        userFetched: user,
        userCredsSignIn: {
          email,
          password
        }
      }
    case USER_LOGOUT:
      let result = state.saveCreds ? {
        ...state,
        userFetched: null,
      }:{
        ...state,
        userFetched: null,
        userCredsSignIn: {
          email: '',
          password: ''
        }
      }
      return result;
    case SWITCHCHECKBOX: 
      return {
        ...state,
        saveCreds: !state.saveCreds
      }
    default:
      return state
  }
}