'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MainLayout from './layouts/main';
import PostsContainer from './containers/posts';
import PostContainer from './containers/post';
import ErrorContainer from './containers/error';

import createStore from './store';
import defaultState from './states'
const store = createStore(defaultState);

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <Router history={hashHistory} >
                <Route path="/" component={MainLayout}>
                    <IndexRedirect to="/page/1"/>
                    <Route path="/page/:page" component={PostsContainer}/>
                    <Route path="/post/:post" component={PostContainer}/>
                    <Route path="/error/:error" component={ErrorContainer}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById("main-container"));