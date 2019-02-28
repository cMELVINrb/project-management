import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData } from 'actions/postActions';


export class HeaderLinks extends Component {
  componentWillMount() {
    this.props.fetchUserData();
  }

  render() {
    if(this.props.userData.account_type === "admin") {
      return (
        <>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Project</Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link my_nav_link" to="/">Admin</Link>
          </li>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Logout</Link>
          </li>
        </>
      );
    } else if(this.props.userData.account_type === "hr") {
      return(
        <>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Project</Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link my_nav_link" to="/">HR</Link>
          </li>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Logout</Link>
          </li>
        </>
      );
    } else if(this.props.userData.account_type === "employee") {
      return(
        <>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Project</Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link my_nav_link" to="/">Employee</Link>
          </li>
          <li className="nav-item active ml-auto">
            <Link className="nav-link my_nav_link" to="/">Logout</Link>
          </li>
        </>
      ); }
      else {
        return(
          <>
            <li className="nav-item active ml-auto">
              <Link className="nav-link my_nav_link" to="/">Logout</Link>
            </li>
          </>
        );
      }
    
  }
}

HeaderLinks.propTypes = {
  fetchUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  userData: state.posts.userData
});

export default connect(mapStateToProps, { fetchUserData })(HeaderLinks);