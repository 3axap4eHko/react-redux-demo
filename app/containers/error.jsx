'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {errorReset} from '../actions';
import {errorSelector} from '../pure/error-selectors';
import containerMixin from '../mixins/containerMixin';

const Error = React.createClass({
    mixins: [
        containerMixin
    ],
    onParamsChange(nextParams) {
        const {dispatch} = this.props;
        if (typeof nextParams.error === 'undefined') {
            dispatch( errorReset() );
        }
    },
    render() {
        const {details} = this.props;
        return (
            <div>
                <h3>{details}</h3>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return errorSelector(state).toJS();
}

export default connect(mapStateToProps)(Error);