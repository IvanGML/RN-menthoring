import { FETCH_ABOUT } from './actions';

function reducerFetch(state = '', action) {
    switch (action.type) {
        case FETCH_ABOUT:
            return state + action.content;
        default:
            return state;
    }
}

export default reducerFetch;