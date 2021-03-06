/*! Generated by redux-scfld not for editing */
'use strict';


import {
    STATUS_PROCESS,
    STATUS_SUCCESS,
    STATUS_FAILURE,
    // Namespaces
    NAMESPACE_ERROR
,    NAMESPACE_MESSAGE
,    NAMESPACE_POST
,    NAMESPACE_POSTS,
    // Types
    ERROR_RAISE,
    ERROR_RESET,
    MESSAGE_HIDE,
    MESSAGE_SHOW,
    POST_FETCH,
    POST_RESET,
    POSTS_FETCH,
    POSTS_RESET
} from './../types';

import errorRaiseAction from './error/raise.js';
import errorResetAction from './error/reset.js';
import messageHideAction from './message/hide.js';
import messageShowAction from './message/show.js';
import postFetchAction from './post/fetch.js';
import postResetAction from './post/reset.js';
import postsFetchAction from './posts/fetch.js';
import postsResetAction from './posts/reset.js';

function _createProcess(namespace, type, ...args) {
    return {
        namespace,
        type,
        status: STATUS_PROCESS,
        args
    };
}
function _createSuccess(namespace, type, result) {
    return {
        namespace,
        type,
        status: STATUS_SUCCESS,
        result
    };
}
function _createFailure(namespace, type, error, args) {
    return {
        namespace,
        type,
        status: STATUS_FAILURE,
        args,
        error
    };
}

function _createAction(namespace, type, action) {
    return (...args) => {
        return (dispatch, getState) => {
            dispatch(_createProcess(namespace, type, ...args));
            return Promise.resolve(action(getState, ...args))
                .then(result => dispatch(_createSuccess(namespace, type, result)))
                .catch(error => dispatch(_createFailure(namespace, type, error, args)));
        }
    }
}

export const errorRaise = _createAction(NAMESPACE_ERROR, ERROR_RAISE, errorRaiseAction);

export const errorReset = _createAction(NAMESPACE_ERROR, ERROR_RESET, errorResetAction);

export const messageHide = _createAction(NAMESPACE_MESSAGE, MESSAGE_HIDE, messageHideAction);

export const messageShow = _createAction(NAMESPACE_MESSAGE, MESSAGE_SHOW, messageShowAction);

export const postFetch = _createAction(NAMESPACE_POST, POST_FETCH, postFetchAction);

export const postReset = _createAction(NAMESPACE_POST, POST_RESET, postResetAction);

export const postsFetch = _createAction(NAMESPACE_POSTS, POSTS_FETCH, postsFetchAction);

export const postsReset = _createAction(NAMESPACE_POSTS, POSTS_RESET, postsResetAction);

