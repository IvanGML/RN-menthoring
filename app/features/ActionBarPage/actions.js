import {range, setToFB} from './helpers';
import {
  HOME,
  OFFICE,
  TECH_TALK,
  SOFT_SKILLS,
  SELF_DEV,
  SLEEP,
  step
} from './constants';

const goToOffice = (data, id) => {
  const payload = data.map(item => {
    if (item.title === 'Personal' || item.title === 'Soft Skills') {
      let progress = range(item.progress - step);
      return {
        ...item,
        progress
      }
    } 
    if (item.title === 'Project Activity') {
      let progress = range(item.progress + step);
      return {
        ...item,
        progress
      }
    } 
    return {...item};
  })
  setToFB(id, payload);
  return {
    type: OFFICE,
    payload
  }
}
const goToHome = (data, id) => {
  const payload = data.map(item => {
    if (item.title === 'Personal') {
      let progress = range(item.progress + step);
      return {
        ...item,
        progress
      }
    } 
    if (item.title === 'Soft Skills' || item.title === 'Hard Skills') {
      let progress = range(item.progress - step);
      return {
        ...item,
        progress
      }
    } 
    return {...item};
  })
  setToFB(id, payload);
  return {
    type: HOME,
    payload
  }
}
const goToTechTalk = (data, id) => {
  const payload = data.map(item => {
    let progress = range(item.progress + step);
      return {
        ...item,
        progress
      }
  })
  setToFB(id, payload);
  return {
    type: TECH_TALK,
    payload
  }
}
const improveSoftSkill = (data, id) => {
  const payload = data.map(item => {
    if (item.title === 'Soft Skills') {
      let progress = range(item.progress + step);
      return {
        ...item,
        progress
      }
    } else {
      let progress = range(item.progress - step);
      return {
        ...item,
        progress
      }
    } 
    return {...item};
  })
  setToFB(id, payload);
  return {
    type: SOFT_SKILLS,
    payload
  }
}
const makeSelfDev = (data, id) => {
  const payload = data.map(item => {
    if (item.title === 'Hard Skills') {
      let progress = range(item.progress + step);
      return {
        ...item,
        progress
      }
    } else {
      let progress = range(item.progress - step);
      return {
        ...item,
        progress
      }
    } 
    return {...item};
  })
  setToFB(id, payload);
  return {
    type: SELF_DEV,
    payload
  }
}
const goToSleep = (data, id) => {
  return {
    type: SLEEP
  }
}

export {
  HOME, OFFICE, TECH_TALK, SOFT_SKILLS, SELF_DEV, SLEEP,
  goToOffice, goToHome, goToTechTalk, improveSoftSkill, makeSelfDev, goToSleep
}