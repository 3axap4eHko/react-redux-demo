'use strict';

export default function (action, args) {
    return dispatch => {
        dispatch({ type: 'DISPATCH_CONTROLLER', action, args });
        return Promise.resolve(action(args))
            .then( result => dispatch({ type: 'ACTION', result }) )
    };
}