/*! Generated by redux-scfld */
'use strict';

import {
    PROGRESS,
    SUCCESS,
    FAILURE,
} from './../../types';

import {setPosts} from '../../pure/posts-functions'

export default function(state, action) {
    switch(action.status) {
        case PROGRESS:
            return state;
        case SUCCESS:
            return setPosts(action.result);
        case FAILURE:
            return state;
    }
    return state;
};