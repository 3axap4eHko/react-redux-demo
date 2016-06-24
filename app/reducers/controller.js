'use strict';

import {Map, fromJS} from 'immutable';

export default function(state = fromJS({
    posts: {
        items: [],
        pageNumber: 1,
        pagesCount: 0,
        isFetching: false
    }
}), action) {
    debugger;
    switch(action) {
        case 'DISPATCH_CONTROLLER':
            debugger;
            break;
        case 'PRE_DISPATCH_CONTROLLER':
            debugger;
            break;

    }
    return state;
};