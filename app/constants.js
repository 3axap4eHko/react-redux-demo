'use strict';

import {List, Map} from 'immutable';

export const INITIAL_STATE = {
    posts: Map({
        items: List([]),
        pageNumber: 1,
        pagesCount: 0,
        isFetching: false,
    })
};