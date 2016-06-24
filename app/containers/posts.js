'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';

import {fetchPosts, getPosts} from '../actions/posts'
import * as PostsController from '../controllers/posts'
import Controller from '../controller'
import Post from '../components/post';

const Posts = React.createClass({
    getDefaultProps(){
        return {
            pagesCount: 0,
            items: []
        };
    },
    getInitialState(){
        return {
            showSnackBar: true
        };
    },
    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(Controller(PostsController.get, params));
    },
    componentWillReceiveProps(nextProps) {
        const { dispatch, params } = nextProps;
        if (params.pageNumber !== this.props.params.pageNumber) {
            dispatch(PostsController.getPosts, params.pageNumber);
            this.setState({showSnackBar: true});
        }
    },
    render() {
        return (
            <div>
                <List>
                    {this.props.items.map( (post, id) => <Post key={`post_${id}`} {...post} />)}
                </List>
                <Snackbar
                    message={`${this.props.pageNumber} / ${this.props.pagesCount}`}
                    autoHideDuration={4000}
                    open={this.state.showSnackBar}
                />
            </div>
        );
    }
});

function mapStateToProps(state) {
    const posts = state.get('posts');
    const items = posts.get('items');
    const pageNumber = posts.get('pageNumber');
    const pagesCount = posts.get('pagesCount');
    const isFetching = posts.get('isFetching');
    return {
        items, pageNumber, pagesCount, isFetching
    };
}

export default connect(mapStateToProps)(Posts);