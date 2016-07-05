'use strict';

import { Map } from 'immutable';

export const setError = (state, error) => Map({details: error});