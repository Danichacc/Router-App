import {fetchData, FETCH_DATA, ADD_DATA, EDIT_DATA, REMOVE_DATA} from '../actions';

export default function fetcher({dispatch}) {
    return next => action => {
        let result = null;

        if (action.type === FETCH_DATA) {
            const { url, start, success, failure } = action.payload;

            dispatch(start());

            fetch(url)
                .then(response => response.json())
                .then(result => dispatch(success(result)))
                .catch(error => dispatch(failure(error)));
        } else if (action.type === ADD_DATA || action.type === EDIT_DATA || action.type === REMOVE_DATA) {
            const { url, failure, user } = action.payload;

            fetch(url, {
                method: action.type === ADD_DATA ? 'POST' :
                    action.type === EDIT_DATA ? 'PUT' : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then(response => response.json())
                .catch(error => dispatch(failure(error)))
                .then(() => dispatch(fetchData()));
        } else {
            result = next(action);
        }

        return result;
    }
}
