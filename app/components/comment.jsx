'use strict';

import React from 'react';
import {ListItem} from 'material-ui/List';

export default React.createClass({
    getDefaultProps(){
        return {
            author: '--Unknown--',
            content: '--Empty--'
        };
    },
    render() {
        return (
            <ListItem
                primaryText={this.props.author}
                secondaryText={<p>{this.props.content}</p>
                }
                secondaryTextLines={2}
            />
        );
    }
});

