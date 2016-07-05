'use strict';

import { createSelector } from 'reselect';

export const messageSelector = state => state.get('message');