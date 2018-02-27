import {
  FETCH_DATA,
  FETCH_PERSONAL_DATA
} from './actions';
import {
  HOME,
  OFFICE,
  TECH_TALK,
  SOFT_SKILLS,
  SELF_DEV,
  SLEEP
} from '../ActionBarPage/actions';
import { SET_NEW_PERSONAL_DATA } from '../EditProfilePage/constants'

const INIT_STATE = {
  data: null,
  isLoading: true,
  personalData: {
    playerTitle: 'Junior Software Engineer',
    playerAge: '',
    playerCompany: '',
    playerName: '',
    playerSurname: '',
    playerPicture: '',
  },
  typesOfAction: [
    HOME,
    OFFICE,
    TECH_TALK,
    SOFT_SKILLS,
    SELF_DEV,
    SLEEP
  ]
}

export default fetchReducer = (state = INIT_STATE, action) => {
  if (action.type === HOME || 
      action.type === OFFICE || 
      action.type === TECH_TALK || 
      action.type === SOFT_SKILLS || 
      action.type === SELF_DEV) {
    return {
      ...state,
      data: action.payload,
    }
  }
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case FETCH_PERSONAL_DATA:
      return {
        ...state,
        personalData: {
          ...state.personalData,
          ...action.payload
        }
      }
    case SET_NEW_PERSONAL_DATA:
      return {
        ...state,
        personalData: {
          ...state.personalData,
          ...action.payload
        },
      }
    case SLEEP:
      return {
        ...state,
      }
    default:
      return state
  }
}