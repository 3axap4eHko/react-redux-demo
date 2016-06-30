'use strict';

import React from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

import serviceProvider from '../service';

const MainLayout =  React.createClass({
    childContextTypes: {
        showMessage: React.PropTypes.func.isRequired
    },
    getInitialState(){
        const service = serviceProvider(this);
        this.getChildContext = () => service;
        
        return {
            message: '',
            showMessage: false,
            isDrawerShown: false
        };
    },
    onToggleDrawer() {
        this.setState({isDrawerShown: !this.state.isDrawerShown});
    },
    onRequestClose() {
        this.setState({showMessage: false});
    },
    render() {
        const {children} = this.props;
        const {message, showMessage} = this.state;
        return (<div>
            <AppBar
                title="Title"
                onLeftIconButtonTouchTap={this.onToggleDrawer}
            />
            <Drawer
                docked={false}
                open={this.state.isDrawerShown}
                onRequestChange={isDrawerShown => this.setState({isDrawerShown})}
            >
                <MenuItem onClick={this.onToggleDrawer}><Link to={{pathname: '/page/1' }}>1</Link></MenuItem>
                <MenuItem onClick={this.onToggleDrawer}><Link to={{pathname: '/page/2' }}>2</Link></MenuItem>
            </Drawer>
            {children}
            <Snackbar
                message={message}
                autoHideDuration={4000}
                open={showMessage}
                onRequestClose={this.onRequestClose}
            />
        </div>);
    }
});


export default MainLayout;