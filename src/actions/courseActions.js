import courseApi from "../api/mockCourseApi";
import {CREATE_COURSE_SUCCESS, LOAD_COURSES_SUCCESS, UPDATE_COURSE_SUCCESS} from "./actionTypes";
// 108
export function loadCoursesSuccess(courses) {
    return {
        type: LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

export function createCourseSuccess(course) {
    return {
        type: CREATE_COURSE_SUCCESS,
        course
    }
}
export function updateCourseSuccess(course) {
    return {
        type: UPDATE_COURSE_SUCCESS,
        course
    }
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(course => {
            course.id
                ? dispatch(updateCourseSuccess(course))
                : dispatch(createCourseSuccess(course))
        })
    }
}