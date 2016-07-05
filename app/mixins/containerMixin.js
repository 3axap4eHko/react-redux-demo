'use strict';

import React from 'react';
import {errorRaise} from '../actions';

export default {
    contextTypes: {
        router: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired
        })
    },
    componentWillMount() {
        this.onParamsChange(this.props.params);
    },
    componentWillUpdate(nextProps) {
        const {dispatch, params, error} = this.props;
        if (!error && nextProps.error) {
            return dispatch(errorRaise(this.context.router, nextProps.error));
        }
        this.onParamsChange(nextProps.params, params);
    },
    componentWillUnmount() {
        this.onParamsChange({});
    }
};