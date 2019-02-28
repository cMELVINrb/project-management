import React, { Component } from 'react';
import ModalCreateProject from 'components/modal/ModalCreateProject';

export class ModalCreateProjectCaller extends Component {
  state = {
    show: false
  }

  showModal = () => {
    this.setState({
      ...this.state,            // takes all the value from the state
      show: !this.state.show    // the value of show is will be equal to the opposite of this.state.show 
    });
  }
  render() {
    return (
      <div>
        <button 
          type="button"
          onClick={this.showModal}
          className="project_create_button">+ CREATE PROJECT</button>

          <ModalCreateProject 
            show={this.state.show}
            showModal={this.showModal} />        
      </div>
    )
  }
}

export default ModalCreateProjectCaller
