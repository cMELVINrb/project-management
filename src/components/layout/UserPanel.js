import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData, fetchProjectList } from 'actions/postActions';

export class UserPanel extends Component {
  componentWillMount() {
    this.props.fetchUserData();
    this.props.fetchProjectList();
  }

  static defaultProps = {
    data: []
  }
  static propTypes = {
    fetchUserData: PropTypes.func.isRequired,
    fetchProjectList: PropTypes.func.isRequired
  }

  render() {
    const userData = this.props.userData;

    // CHECK ONGOING AND FINISHED PROJECT COUNT
    var onGoingCount = 0;
    var finishedCount = 0;
    this.props.projectList.data.map(item =>    
      {
        if(item.status ==='active'){
          onGoingCount++;
        }
        else if(item.status === 'finished'){
          finishedCount++;
        }
      }
    );

    return (
      <div className="user_panel_container">
        <div className="container-fluid">
          <div className="row">
              <div className="user_panel_circle">
                <img alt="" src={userData.picture} />
              </div>
              <div className="user_panel_data">
                <h2>{userData.first_name} {userData.last_name}</h2>
                <div>{userData.account_type}</div>
                <div>Edit my profile</div>
              </div>
          </div>
              
          <div className="row user_panel_projects">
            <div className="col-6 onGoing_projects">
              <div>{onGoingCount}</div>
              <div>Ongoing</div>
              <div>projects</div>
            </div>
            <div className="col-6 finished_projects">
              <div>{finishedCount}</div>
              <div>Finished</div>
              <div>projects</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.posts.userData,
  projectList: state.posts.projectList
});

export default connect(mapStateToProps, { fetchUserData, fetchProjectList })(UserPanel);