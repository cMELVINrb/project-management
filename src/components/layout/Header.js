import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData } from 'actions/postActions';

import HeaderLinks from 'components/layout/HeaderLinks';

export class Header extends Component {
  componentWillMount() {
    this.props.fetchUserData();
  }
  render() {
    return (
      <nav className="row navbar navbar-expand-lg my_navbar sticky-top">
        {/* TOGGLER */}
        <button className="navbar-toggler ml-auto header_toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div></div>
          <div></div>
          <div></div>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav ml-auto">
            <HeaderLinks />
          </ul>

        </div>

      </nav>

    )
  }
}

Header.propTypes = {
  fetchUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({                           // takes the state, and passes an object 
  userData: state.posts.userData                                    // the 'posts' name is derived from reducers/index.js, userData is from the items in postReducer
});

export default connect(mapStateToProps, { fetchUserData })(Header);
