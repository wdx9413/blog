import {combineReducers, createStore} from 'redux';

import {articles, account} from './reducers';


export default createStore(combineReducers({
    articles,
    account
}));