'use strict';

export const showMessage = (state, message) => state.merge({
    message,
    displayMessage: true
});
export const hideMessage = state => state.merge({
    message: '',
    displayMessage: false
});
