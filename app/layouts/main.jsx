'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import PageLink from '../components/page-link';
import {messageHide} from '../actions'
import {messageSelector} from '../pure/message-selectors';

const MainLayout =  React.createClass({
    getInitialState(){
        return {
            isDrawerShown: false
        };
    },
    onToggleDrawer() {
        this.setState({isDrawerShown: !this.state.isDrawerShown});
    },
    onRequestClose() {
        this.props.dispatch(messageHide())
    },
    render() {
        const {children, message, displayMessage} = this.props;
        return (<div>
            <AppBar
                title={<FlatButton href="#" linkButton={true}>React-Redux Demo</FlatButton>}
                onLeftIconButtonTouchTap={this.onToggleDrawer}
            />
            <Drawer
                docked={false}
                open={this.state.isDrawerShown}
                onRequestChange={isDrawerShown => this.setState({isDrawerShown})}
            >
                <PageLink onClick={this.onToggleDrawer} primaryText="1" link="/page/1" />
                <PageLink onClick={this.onToggleDrawer} primaryText="2" link="/page/2"/>
            </Drawer>
            {children}
            <Snackbar
                message={message}
                autoHideDuration={4000}
                open={displayMessage}
                onRequestClose={this.onRequestClose}
            />
        </div>);
    }
});

function mapStateToProps(state) {
    const message = messageSelector(state).toJS();
    return {
        ...message
    };
}


export default connect(mapStateToProps)(MainLayout);

