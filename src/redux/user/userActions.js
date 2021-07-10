import axios from 'axios';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });

export const fetchUsers = () => dispatch => {
    dispatch(fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const { data: users } = response;
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => dispatch(fetchUsersFailure(error.message)));
};