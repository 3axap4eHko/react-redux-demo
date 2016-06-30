'use strict';

import React from 'react';
import {Link} from 'react-router';
import {ListItem} from 'material-ui/List';

export default React.createClass({
    render() {
        const {id, title, content} = this.props;
        return (
            <ListItem
                primaryText={<Link to={`/post/${id}`}>{title}</Link>}
                secondaryText={<p>{content}</p>}
                secondaryTextLines={2}
            />
        );
    }
});

