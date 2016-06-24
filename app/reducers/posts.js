'use strict';
import {List, Map} from 'immutable';
import * as TYPES from '../types';

export default function (state = Map({
    items: List(),
    pageNumber: 1,
    pagesCount: 0,
    isFetching: false
}), action) {
    debugger;
    switch (action.type) {
        case TYPES.POSTS_REQUEST:
            return state.merge({isFetching: true});
        case TYPES.POSTS_RECEIVE:
            return state.merge({
                items: List(action.items),
                pageNumber: action.pageNumber,
                pagesCount: action.pagesCount,
                isFetching: false
            });
    }
    return state;
}