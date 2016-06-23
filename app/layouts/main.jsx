'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

export default React.createClass({
    getInitialState(){
        return {
            isDrawerShown: false
        };
    },
    onToggleDrawer() {
        this.setState({isDrawerShown: !this.state.isDrawerShown});
    },
    render() {
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
            {this.props.children}
        </div>);
    }
});