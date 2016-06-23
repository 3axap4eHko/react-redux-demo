'use strict';

import React from 'react';
import {ListItem} from 'material-ui/List';

export default React.createClass({
    render() {
        return (
            <ListItem
                primaryText={this.props.title}
                secondaryText={<p>{this.props.content}</p>
                }
                secondaryTextLines={2}
            />
        );
    }
});

