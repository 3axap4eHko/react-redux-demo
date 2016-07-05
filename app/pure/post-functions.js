'use strict';

import {fromJS} from 'immutable';

export const setPost = (state, post) => fromJS(post);
export const setPostError = (state, error) => state.set('error', error);