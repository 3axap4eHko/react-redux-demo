'use strict';

import React, {PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem';

const {func, string} = PropTypes;

export default React.createClass({
    propTypes: {
        onClick: func.isRequired,
        link: string.isRequired,
        primaryText: string
    },
    contextTypes: {
        router: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired
        })
    },
    onClick(e) {
        const {link: pathname, onClick} = this.props;
        onClick(e);
        this.context.router.push(pathname);
    },
    render() {
        const {primaryText} = this.props;
        return (
            <MenuItem
                primaryText={primaryText}
                onClick={this.onClick}
            />
        );
    }
});

