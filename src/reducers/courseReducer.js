import {LOAD_COURSES_SUCCESS} from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case LOAD_COURSES_SUCCESS:
            // return [...state, Object.assign({}, action.course)];
            return action.courses;
        default:
            return state;
    }
}