'use strict';

import React from 'react';
import {ListItem} from 'material-ui/List';

export default React.createClass({
    render() {
        const {author, content} = this.props;
        return (
            <ListItem
                primaryText={author}
                secondaryText={<p>{content}</p>}
                secondaryTextLines={2}
            />
        );
    }
});

