'use strict';

import {List, Map} from 'immutable';

export default Map({
    posts: Map({
        pageNumber: 1,
        pagesCount: 0,
        items: List([])
    }),
    post: Map({
        id: -1,
        title: '',
        content: '',
        comments: List([]),
    }),
    page: Map({
        title: ''
    })
});