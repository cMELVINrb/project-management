// Evaluates any actions that are committed such as fetching post, creating new posts etc.
import { 
  FETCH_USER_DATA,
  FETCH_PROJECT_LIST,
  FETCH_EMPLOYEE_LIST,
  CREATE_PROJECT,
  FETCH_PROJECT_DETAIL
} from 'actions/types';

const initialState = {                                              // Represents the post that come in from action which contains the fetch requests
  userData: {
    projects: []
  },
  projectList: {
    data: []
  },
  employeeList: [],
  project: {},
  projectDetail: {}
}

export default function(state = initialState, action) {    // evaluates what type that we are dealing with
  switch(action.type){
    case FETCH_USER_DATA: {
      return {                                             // return the state with the items that have been fetched
        ...state,
        userData: action.payload                              // if case matches FETCH_POSTS, it calls its action named payload, name depends on what you give in dispatch in postActions.js
      };
    }
    case FETCH_PROJECT_LIST: {
      return {
        ...state,
        projectList: action.payload
      };
    }
    case FETCH_EMPLOYEE_LIST: {
      return {
        ...state,
        employeeList: action.payload
      };
    }
    case CREATE_PROJECT: {
      return {
        ...state,
        project: action.payload
      };
    }
    case FETCH_PROJECT_DETAIL: {
      return {
        ...state,
        projectDetail: action.payload
      };
    }
    default: {
      return state;
    }
  }
} 
