import {combineReducers, createStore} from 'redux';

import {articles, visibilityFilter} from './reducers';



export default createStore(combineReducers({
    articles,
    visibilityFilter
}));