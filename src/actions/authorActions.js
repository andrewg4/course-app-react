import authorApi from "../api/mockAuthorApi";
import {LOAD_AUTHORS_SUCCESS} from "./actionTypes";

export function loadAuthorSuccess(authors) {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return function (dispatch) {
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error)
        });
    }
}