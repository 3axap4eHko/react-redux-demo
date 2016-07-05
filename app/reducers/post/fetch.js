/*! Generated by redux-scfld */
'use strict';

import {
    STATUS_PROCESS,
    STATUS_SUCCESS,
    STATUS_FAILURE,
} from './../../types';

import {setPost, setPostError} from '../../pure/post-functions'

import defaultState from '../../states/post';

export default function(state = defaultState, action) {
    switch(action.status) {
        case STATUS_PROCESS:
            break;
        case STATUS_SUCCESS:
            return setPost(state, action.result);
        case STATUS_FAILURE:
            return setPostError(state, action.error);
    }
    return state;
};