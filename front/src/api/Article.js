import { path } from ".";

export async function getArticleByIdAsync(id) {
    let response = await fetch(
        `${path}/article?id=${id}`,
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("get article error")
    return {};
}
export async function getAllArticlesAsync() {
    let response = await fetch(
        `${path}/articles`,
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("get articles error")
    return [];
}
export async function getArticlesByTypeAsync(type) {
    let response = await fetch(
        `${path}/articles/${type}`,
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("get articles error")
    return [];
}

export async function deleteArticleById(id) {
    let response = await fetch(
        `${path}/article`,
        {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        console.log('delete article success');
        return;
    }
    console.error("delete article error");

}

export async function newArticle(article) {
    let response = await fetch(
        `${path}/article`,
        {
            method: 'PUT',
            body: JSON.stringify(article),
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        console.log('new article success');
        return;
    }
    console.error("new article error");

}

export async function updateArticle(article) {
    let response = await fetch(
        `${path}/article`,
        {
            method: 'POST',
            body: JSON.stringify(article),
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        console.log('update article success');
        return;
    }
    console.error("update article error");

}
