/*! Generated by redux-scfld */
'use strict';

import {
    STATUS_SUCCESS,
} from './../../types';

import defaultState from './../../states/error';

export default function(state = defaultState, action) {
    switch(action.status) {
        case STATUS_SUCCESS:
            return defaultState;
    }
    return state;
};