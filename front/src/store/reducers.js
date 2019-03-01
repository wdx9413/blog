import { ADD_ARTICLE, DELETE_ARTICLE, CHANGE_ARTICLE, SET_ARTICLES, SET_FILTER, VisibilityFilters } from "./actions";

export const articles = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.article]
        case DELETE_ARTICLE:
            return state.filter((article) => {
                    return article.id !== action.id;
                })
        case CHANGE_ARTICLE:
            return state.map((article) => {
                    if (article.id === action.article.id) {
                        return action.article;
                    }
                    return article;
                })
        case SET_ARTICLES:
            return [...action.articles]
        default:
            return state;
    }
}

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}