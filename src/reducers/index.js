import { combineReducers } from 'redux';
import postReducer from 'reducers/postReducer';

export default combineReducers({
  posts: postReducer
});

// HOW REDUX WORKS
// - add the action
// - send type and payload to the reducer
// - in reducer, decide how the state will work
// - add the single item to the state
// - reflects to the other component inside  the post component
// - 
// - 
// - 
// - 