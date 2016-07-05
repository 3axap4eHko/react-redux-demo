'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const loggerMiddleware = createLogger({
    stateTransformer(state) {
        return state.toJS();
    },
    actionTransformer(action) {
        return {...action, type: `${action.type}_${action.status}`};
    }
});

export default function (initialState) {
    return createStore(reducers,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ));
}