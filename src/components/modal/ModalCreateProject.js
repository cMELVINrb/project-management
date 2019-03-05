import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchEmployeeList, createProject } from 'actions/postActions';

export class ModalCreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
      status: 'active',
      client_name: '',
      client_company: '',
      title: '',
      client_email: '',
      client_contact: '',
      manager_id: '',
      description: '',
      start_date: '',
      deadline: ''
    }
  }
  static defaultProps = {
    employeeList: []
  }

  componentWillMount() {
    this.props.fetchEmployeeList();
  }
  
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      picture: this.state.picture,
      status: this.state.status,
      client_name: this.state.client_name,
      client_company: this.state.client_company,
      title: this.state.title,
      client_email: this.state.client_email,
      client_contact: this.state.client_contact,
      manager_id: this.state.manager_id,
      description: this.state.description,
      start_date: this.state.start_date,
      deadline: this.state.deadline
    };

    this.setState({
      picture: '',
      status: 'active',
      client_name: '',
      client_company: '',
      title: '',
      client_email: '',
      client_contact: '',
      manager_id: '',
      description: '',
      start_date: '',
      deadline: ''
    })
    
    this.props.createProject(post);
  }

  static propTypes = {
    createProject: PropTypes.func.isRequired
  };


  render() {
    if(!this.props.show) {
      return null;              // return if this.props.show is false
    }
    
    const mapEmployeeList = this.props.employeeList.map(employee => (
      <option key={employee.id} value={employee.id}>{employee.fname} {employee.lname}</option>
    ))
    
    return (
      <>
        {/* GRAY BACKGROUND */}
        <div className="project_create_modal_blocker" />

        {/* CREATE MODAL */}
        <div className="project_create_modal">

          {/* CLOSE BUTTON */}
          <button className="modal_close_button" type="button" onClick={this.props.showModal}>
            <div></div>
            <div></div>
          </button>

          {/* HEADER */}
          <div className="modal_header">
            <h1>Create new project</h1>
          </div>
          
          {/* BODY */}
          <div className="modal_body">
            <form onSubmit={this.onSubmit} className="row">
              {/* 1st ROW */}
                <div className="col-6">
                  <input 
                    name="title" 
                    type="text" 
                    placeholder="Project Title"
                    value={this.state.title} 
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-6">
                  <input 
                    name="client_contact" 
                    type="text" 
                    placeholder="Client Contact Number"
                    value={this.state.client_contact}
                    onChange={this.onChange}  
                  />
                </div>

              {/* 2nd ROW */}
                <div className="col-6">
                  <input 
                    name="client_name" 
                    type="text" 
                    placeholder="Name of Client"
                    value={this.state.client_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="col-6">
                  <select 
                    name="manager_id"
                    value={this.state.manager_id}
                    onChange={this.onChange}  
                  >
                    <option value="" disabled>Choose Project Manager</option>
                    <option value="">-- None --</option>
                    {mapEmployeeList}
                  </select>
                </div>

              {/* 3rd ROW */}
                <div className="col-6">
                  <input 
                    name="client_company" 
                    type="text" 
                    placeholder="Company Name"
                    value={this.state.client_company}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-3">
                  <input 
                    name="start_date" 
                    type="text" 
                    placeholder="Starting Date" 
                    value={this.state.start_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-3">
                  <input 
                    name="deadline" 
                    type="text" 
                    placeholder="Deadline" 
                    value={this.state.deadline}
                    onChange={this.onChange}
                  />
                </div>

              {/* 4th ROW */}
                <div className="col-6">
                  <input 
                    name="client_email" 
                    type="text" 
                    placeholder="Client Email Address" 
                    value={this.state.client_email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-6">
                  <input 
                    name="picture" 
                    type="file" 
                    accept="image/png, image/jpeg, image/jpg"
                    value={this.state.picture}
                    onChange={this.onChange}
                  />
                </div>
            
              {/* 5th ROW */}
                <div className="col-12">
                  <textarea 
                    name="description" 
                    placeholder="Project Description" 
                    style={{  height: "150px",margin:" 20px"}}
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

              {/* 6th ROW */}
                  <div className="offset-6 col-3">
                    <button className="submit_button" type="submit">Submit</button>
                  </div> 
                  <div className="col-3">
                    <button className="cancel_button" type="button" onClick={this.props.showModal} >Cancel</button>
                  </div> 
                </form>
          </div>


        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  employeeList: state.posts.employeeList
});

export default connect(mapStateToProps, { fetchEmployeeList, createProject })(ModalCreateProject);
