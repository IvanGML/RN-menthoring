const USER_INIT = 'USER_INIT';
const SIGNUP = 'SIGNUP';
const USER_LOGOUT = 'USER_LOGOUT';
const SWITCHCHECKBOX = 'SWITCHCHECKBOX';

const userInit = (user, email, password) => {
  return {
    type: USER_INIT,
    payload: {user, email, password} 
  }
}

const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
}

const switchCheckBox = () => {
  return {
    type: SWITCHCHECKBOX
  }
}

const userSignUp = (user, email, password) => {
  return {
    type: SIGNUP,
    payload: {user, email, password} 
  }
}

export { userInit, USER_INIT, 
         userLogout, USER_LOGOUT,
         switchCheckBox, SWITCHCHECKBOX, 
         userSignUp, SIGNUP 
       };