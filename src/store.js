import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';                        // allows synchronous request
import rootReducer from 'reducers';

const initialState = {};                                // Empty Object

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware  ),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()     // enables the extension redux devtools to work on this project
  )
);

export default store;