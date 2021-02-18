import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../reducers';
import fetcher from '../dataMiddleware';

const store = createStore(rootReducer, applyMiddleware(fetcher));

export default store;
