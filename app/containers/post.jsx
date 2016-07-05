'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';

import Comment from '../components/comment';
import {postFetch, postReset, messageShow} from '../actions'
import {postSelector} from '../pure/post-selectors';
import containerMixin from '../mixins/containerMixin';

const Post = React.createClass({
    mixins: [
        containerMixin
    ],
    onParamsChange(nextParams, params = {}) {
        const {dispatch} = this.props;
        if (typeof nextParams.post === 'undefined' || nextParams.post === null) {
            dispatch( postReset() );
        } else if (params.post !== nextParams.post) {
            dispatch(postFetch(nextParams.post));
        }
    },
    componentWillUpdate(nextProps) {
        const {dispatch, title, post} = this.props;
        if (nextProps.post !== post) {
            dispatch(messageShow(`${nextProps.title}`));
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