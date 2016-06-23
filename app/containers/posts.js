'use strict';

import React from 'react';
import {List} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/posts'
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
        dispatch(fetchPosts(params.pageNumber));
    },
    componentWillReceiveProps(nextProps) {
        const { dispatch, params } = nextProps;
        if (params.pageNumber !== this.props.params.pageNumber) {
            dispatch(fetchPosts(params.pageNumber));
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
    const items = state.posts.get('items');
    const pageNumber = state.posts.get('pageNumber');
    const pagesCount = state.posts.get('pagesCount');
    const isFetching = state.posts.get('isFetching');
    return {
        items, pageNumber, pagesCount, isFetching
    };
}

export default connect(mapStateToProps)(Posts);