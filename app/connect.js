'use strict';

import React from 'react';
import {connect} from 'react-redux';

const components = new Map();

const _hook = (component, method, callback) => {
    if (!components.has(component)) {
        components.set(component, {});
    }
    const hooks = components.get(component);
    if (!hooks[method]) {
        hooks[method] = [];
        const __hookedMethod = component[method] || (() => {});
        component[method] = function(...args) {
            hooks[method] = hooks[method].filter( hookCallback => hookCallback(...args) );
            return __hookedMethod(...args);
        }
    }
    hooks[method].push(callback);
};


export default function(Component) {

    return connect(Component);
}