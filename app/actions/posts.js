'use strict';

import * as Types from '../types';

import xhr from 'xhr';

function request(url) {
    return new Promise( (resolve, reject) => {
        xhr({
            uri: url
        }, function (err, resp, body) {
            if (err) { reject(err) }
            else { resolve(JSON.parse(body))}
        });
    }) ;
}

function postsRequest(pageNumber) {
    return {
        type: Types.POSTS_REQUEST,
        pageNumber
    };
}
function postsReceive({items, pageNumber, pagesCount}) {
    return {
        items,
        pageNumber,
        pagesCount,
        type: Types.POSTS_RECEIVE
    };
}

function shouldFetchPosts(state, pageNumber) {
    return state.posts.pageNumber !== pageNumber ||
            !state.posts.isFetching;
}


export const fetchPosts = pageNumber => {
    return (dispatch, getState) => {
        if (!shouldFetchPosts(getState())) {
            return Promise.resolve();
        }
        dispatch(postsRequest(pageNumber));
        return request(`/data/posts${pageNumber}.json`)
            .then( posts => {
                dispatch(postsReceive(posts));
            });
    }
};

export const getPosts = (...args) => {
    debugger;
    return (dispatch, getState) => {
        debugger;
    }
};