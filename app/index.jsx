'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MainLayout from './layouts/main';
import PostsContainer from './containers/posts';

import createStore from './store';
const store = createStore();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <Router history={hashHistory} >
                <Route path="/" component={MainLayout}>
                    <IndexRedirect to="/page/1"/>
                    <Route path="/page/:pageNumber" component={PostsContainer}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById("main-container"));