'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';

import {postsFetch} from '../actions'
import Post from '../components/post';
import {postsSelector} from '../pure/posts-selectors';

const Posts = React.createClass({
    contextTypes: {
        showMessage: React.PropTypes.func.isRequired
    },
    getDefaultProps(){
        return {
            items: []
        };
    },
    getInitialState(){
        return {
            showSnackBar: true
        };
    },
    componentWillMount() {
        const { dispatch, params } = this.props;
        dispatch(postsFetch(params.page))
    },
    componentWillUpdate(nextProps) {
        const {dispatch, page, params} = this.props;
        if (nextProps.page !== page) {
            this.context.showMessage(`${nextProps.page} / ${nextProps.count}`);
        }
        if (nextProps.params.page !== params.page) {
            dispatch(postsFetch(nextProps.params.page));
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