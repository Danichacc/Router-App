import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_USER,
    EDIT_USER,
    TOGGLE_FORM,
} from '../actions';

const defaultState = {
    isFetching: false,
    isFormOpen: false,
    users: [],
    currentUser: {
        name: '',
        surname: '',
        phone: '',
        id: '',
    }
};

export function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload,
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
            }

        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
            }


        case EDIT_USER:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    [action.payload.field]: action.payload.value,
                }
            }

        case TOGGLE_FORM:
            return {
                ...state,
                isFormOpen: !state.isFormOpen,
                currentUser: {
                    name: '',
                    surname: '',
                    phone: '',
                    id: '',
                }
            }

        default:
            return state;
    }
}
