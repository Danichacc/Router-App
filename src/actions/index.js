export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';
export const SET_USER = 'SET_USER';
export const EDIT_USER = 'EDIT_USER';
export const TOGGLE_FORM = 'OPEN_FORM';
export const TOKEN = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';

export const fetchData = () => ({
    type: FETCH_DATA,
    payload: {
        url: TOKEN,
        start: fetchDataStart,
        success: fetchDataSuccess,
        failure: fetchDataFailure,
    }
});

export const fetchDataStart = () => ({type: FETCH_DATA_START});
export const fetchDataSuccess = data => ({type: FETCH_DATA_SUCCESS, payload: data});
export const fetchDataFailure = () => ({type: FETCH_DATA_FAILURE});

export const createUser = user => ({
    type: ADD_DATA,
    payload: {
        url: TOKEN,
        failure: fetchDataFailure,
        user,
    }
});

export function updateUser(user) {
    const userId = `/${user.id}`;

    return ({
        type: EDIT_DATA,
        payload: {
            url: TOKEN + userId,
            failure: fetchDataFailure,
            user,
        }
    });
}

export function deleteUser(user) {
    const userId = `/${user.id}`;

    return ({
        type: REMOVE_DATA,
        payload: {
            url: TOKEN + userId,
            failure: fetchDataFailure,
        }
    });
}

export const setCurrentUser = user => ({type: SET_USER, payload: user});
export const editCurrentUser = (field, value) => ({type: EDIT_USER, payload: {field, value}});
export const toggleForm = () => ({type: TOGGLE_FORM});
