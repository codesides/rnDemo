/*
 * @Author: codesides
 * @Descripttion:
 * @Date: 2020-03-26 16:41:56
 * @LastEditors: codesides
 * @LastEditTime: 2020-03-31 15:57:08
 * @FilePath: /RN/myApp/src/redux/store.js
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const middlewares = [thunk, logger];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(...middlewares)),
// );

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;

// const enhancer = composeWithDevTools({
//   // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
// })(applyMiddleware(...middlewares));

// export default function configureStore(initialState) {
//   const store = createStore(reducer, initialState, enhancer);
//   if (module.hot) {
//     module.hot.accept(() => {
//       store.replaceReducer(require('./reducers').default);
//     });
//   }
//   return store;
// }
