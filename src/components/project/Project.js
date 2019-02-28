import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  // connects your components to your redux store that was provided by the provider component

import { fetchProjectList } from 'actions/postActions';             // Your action
import ModalCreateProjectCaller from 'components/modal/ModalCreateProjectCaller';

export class Project extends Component {  
  componentWillMount() {
    this.props.fetchProjectList();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newProject) {
      this.props.projectList.data.unshift(nextProps.newProject);            // unshift adds the item to the beginning, push adds the item in the end    
    }
  } 

  static defaultProps = {
    data: []
  }

  static propTypes = {
    fetchProjectList: PropTypes.func.isRequired,
    newProject: PropTypes.object
  }

  
  render() {
   
    console.log(this.props.projectList)

    const postItems = this.props.projectList.data.map(project => (         
      <div  className="project_card row"  key={ project.id }>
        <div className="project_card_image">
          <img src={project.picture} />                                  
        </div>
        <div className="project_card_text">
          <h1>{ project.title }</h1>
          <table>
            <tbody>
              <tr>
                <td><h3>Project Manager</h3></td>
                <td><h3>:</h3></td>
                <td><h3>
                {project.manager === null ? 'no project manager assigned' : project.manager.fname}
                  
                  </h3></td>
              </tr>
              <tr>
                <td><h3>Company</h3></td>
                <td><h3>:</h3></td>
                <td><h3>{ project.client_company }</h3></td>
              </tr>
              <tr>
                <td><h3>Deadline</h3></td>
                <td><h3>:</h3></td>
                <td><h3>{ project.deadline }</h3></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    ));

    return (
      <div>
        <div className="project_create_button_container">
          <ModalCreateProjectCaller />
        </div>
        {postItems}
      </div>
    )
  }
}


const mapStateToProps = state => ({                           // takes the state, and passes an object 
  projectList: state.posts.projectList,                                    // the 'posts' name is derived from reducers/index.js, items is from the items in postReducer
  newProject: state.posts.project
});

export default connect(mapStateToProps, { fetchProjectList })(Project);
