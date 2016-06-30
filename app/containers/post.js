'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';

import {postFetch} from '../actions'
import Comment from '../components/comment';

import {postSelector} from '../pure/post-selectors';

const Post = React.createClass({
    contextTypes: {
        showMessage: React.PropTypes.func.isRequired
    },
    componentWillMount() {
        const { dispatch, params } = this.props;
        dispatch(postFetch(params.id))
    },
    componentWillUpdate(nextProps) {
        const {dispatch, title, id, params} = this.props;
        if (nextProps.id !== id) {
            this.context.showMessage(`${nextProps.title}`);
        }
        if (nextProps.params.id !== params.id) {
            dispatch(postFetch(nextProps.params.id));
        }
    },
    render() {
        const {title, content, comments} = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <div>{content}</div>
                <List>
                    {comments.map((comment, id) => <Comment key={`comment_${id}`} {...comment} />)}
                </List>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return postSelector(state).toJS();
}

export default connect(mapStateToProps)(Post);