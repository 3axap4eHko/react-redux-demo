'use strict';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/controller';

const loggerMiddleware = createLogger();

export default function (initialState) {
    return createStore(reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ));
}