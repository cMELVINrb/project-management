import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store'

import Project from 'components/project/Project';
import PostForm from 'components/project/PostForm';
import Header from 'components/layout/Header';
import UserPanel from 'components/layout/UserPanel';


class App extends Component {
  render() {
    return (
      <Provider store={store}> {/* The provider takes a store, store holds a state */}
        <Router>
          <div className="App">
            <div className="container-fluid">
              <Header />

              <Route exact path="/" render={props => (
                <React.Fragment>
                  <div className="page_container">
                    <div className="row">
                      <UserPanel/>
                      <div className="project_container ml-auto"> 
                        <Project />
                      </div>
                      {/* <PostForm />  */}
                    </div>
                  </div>
                </React.Fragment>
              )} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
