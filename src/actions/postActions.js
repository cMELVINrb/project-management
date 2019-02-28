import { 
  FETCH_USER_DATA,
  FETCH_PROJECT_LIST,
  FETCH_EMPLOYEE_LIST,
  CREATE_PROJECT,
  NEW_POST
} from 'actions/types';

import local_link_user_data from 'data/proj_user_admin.json';                    // LOCAL JSON FILE LINK
import local_link_project_list from 'data/proj_list.json';

import local_link_employee_list from 'data/employee_list.json';

// Actual NGROK LINKS FROM SERVER
const rootUrl = 'http://d15d082e.ngrok.io';

const proxyUrl = 'https://devbox-project-management.herokuapp.com/?q=';
const userDataUrl = proxyUrl + 'https://devboxdevbox.000webhostapp.com/proj_user_admin.json';


/* const projectListUrl = proxyUrl + 'https://devboxdevbox.000webhostapp.com/proj_list.json'; */

// TAKE USER DATA ******************************************************************************
/* export const fetchUserData = () => dispatch => {
  fetch(userDataUrl)
    .then(res => res.json())
    .then(userData => 
      dispatch({
        type: FETCH_USER_DATA,
        payload: userData
      }));
}; */

// OFFLINE TAKE USER DATA
 export const fetchUserData = () => ({                                                
  type: FETCH_USER_DATA, 
  payload: local_link_user_data
});
//***********************************************************************************************



// TAKE PROJECT LIST ****************************************************************************
/* export const fetchProjectList = () => dispatch => {
  fetch(rootUrl + '/projects')
    .then(res => res.json())
    .then(projectList => 
      dispatch({
        type: FETCH_PROJECT_LIST,
        payload: projectList
      }));
};
 */

// OFFLINE TAKE PROJECT DATA
export const fetchProjectList = () => ({                                                
  type: FETCH_PROJECT_LIST, 
  payload: local_link_project_list
});
//***********************************************************************************************



// EMPLOYEE LIST *******************************************************************************
/* export const fetchEmployeeList = () => dispatch => {
  fetch(rootUrl + '/mga_empleyado')
    .then(res => res.json())
    .then(employeeList => 
      dispatch({
        type: FETCH_EMPLOYEE_LIST,
        payload: employeeList 
      }));
}; */

// OFFLINE TAKE EMPLOYEE LIST DATA
export const fetchEmployeeList = () => ({
  type: FETCH_EMPLOYEE_LIST,
  payload: local_link_employee_list
})


// CREATE PROJECT *******************************************************************************
export const createProject = (postData) => dispatch => {
  fetch(rootUrl + '/projects', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'          // Lets it know the data type
    },
    body: JSON.stringify(postData)                // Make sure its a JSON string, prepares it to be sent
  })
  .then(res => res.json())                      // Lets it know that you want the json data
  .then(project => 
    dispatch({
      type: CREATE_PROJECT,
      payload: project
      }));
};

// sample code only
/* export const createProject = (postData) => ({
  type: FETCH_USER_DATA,
  payload: local_link_project_list
});
 */




//***********************************************************************************************

export const createPost = (postData) => dispatch => {
  fetch(local_link_project_list, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'          // Lets it know the data type
    },
    body: JSON.stringify(postData)                // Make sure its a JSON string, prepares it to be sent
  })
    .then(res => res.json())                      // Lets it know that you want the json data
    .then(post => 
      dispatch({
        type: NEW_POST,
        payload: post
      }));
};