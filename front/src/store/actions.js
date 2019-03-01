export const ADD_ARTICLE = 'ADD_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const CHANGE_ARTICLE = 'CHANGE_ARTICLE';
export const SET_ARTICLES = 'SET_ARTICLES';

export function addArticle(article) {
    return {type: ADD_ARTICLE, article}
}

export function deleteArticle(id) {
    return {type: DELETE_ARTICLE, id}
}

export function changeArticle(article) {
    return {type: CHANGE_ARTICLE, article};
}

export function setArticles(articles) {
    return {type: SET_ARTICLES, articles}
}


export const SET_FILTER = 'SET_FILTER';

// filter : {filter: SHOW_ALL, type: 0}
// filter : {filter: SHOW_TYPE, type: 1}
export function setFilter(filter) {
    return {type: SET_FILTER, filter}
}

const SHOW_ALL = 'SHOW_ALL';
const SHOW_1 = 'SHOW_1';
const SHOW_2 = 'SHOW_2';
const SHOW_3 = 'SHOW_3';
const SHOW_4 = 'SHOW_4';
const SHOW_5 = 'SHOW_5';

export const VisibilityFilters = {
    SHOW_ALL,
    SHOW_1,
    SHOW_2,
    SHOW_3,
    SHOW_4,
    SHOW_5
}