'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';

import Post from '../components/post';
import {postsFetch, postsReset, messageShow} from '../actions'
import {postsSelector} from '../pure/posts-selectors';
import containerMixin from '../mixins/containerMixin';

const Posts = React.createClass({
    mixins: [containerMixin],
    contextTypes: {
        router: React.PropTypes.shape({
            push: React.PropTypes.func.isRequired
        })
    },
    onParamsChange(nextParams, params = {}) {
        const {dispatch} = this.props;
        if (typeof nextParams.page === 'undefined' || nextParams.page === null) {
            dispatch(postsReset());
        }else if (params.page !== nextParams.page) {
            dispatch(postsFetch(nextParams.page));
        }
    },
    componentWillUpdate(nextProps) {
        const {dispatch, page} = this.props;

        if (nextProps.page !== page) {
            dispatch(messageShow(`${nextProps.page} / ${nextProps.count}`));
        }
    },
    render() {
        const {items} = this.props;
        return (
            <div>
                <List>
                    {items.map( (post, id) => <Post key={id} {...post} />)}
                </List>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return postsSelector(state).toJS();
}

export default connect(mapStateToProps)(Posts);