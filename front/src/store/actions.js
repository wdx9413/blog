
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

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(data = {}) {
    return {type: LOGIN}
}

export function logout(data = {}) {
    return {type: LOGOUT}
}
