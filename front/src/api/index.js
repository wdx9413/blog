import Utils from "../utils";
const path = 'http://localhost:8080';

export async function getArticleByIdAsync(id) {
    let response = await fetch(
        `${path}/article?id=${id}`, 
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let data = await response.json();
    data.date = Utils.formatJavaDateString(data.date);
    return data;
}
// export async function getArticlesAsync() {
//     let response = await fetch(
//         `${path}/articles`, 
//         {
//             method: 'GET'
//         }
//     );
//     let data = response.json();
//     data.forEach(element => {
//         element.date = Utils.formatJavaDateString(element.date);
//     });
//     return data;
// }
export async function getArticlesByTypeAsync(type) {
    let response = await fetch(
        `${path}/articles?type=${type}`, 
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let data = await response.json();
    data.forEach(element => {
        element.date = Utils.formatJavaDateString(element.date);
    });
    return data;
}

export async function deleteArticleById(id) {
    let response = await fetch(
        `${path}/article`, 
        {
            method: 'DELETE',
            body: JSON.stringify({id}),
            credentials: "include"
        }
    );
    let ok = await response.ok;
    if (ok) {
        console.log('delete article success');
    }
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
    let ok = await response.ok;
    if (ok) {
        console.log('new article success');
    }
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
    let ok = await response.ok;
    if (ok) {
        console.log('update article success');
    }
}

export async function checkAuth() {
    let response = await fetch(
        `${path}/check`, 
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonData = await response.json();
    return jsonData;
}

export async function login(data) {
    let response = await fetch(
        `${path}/login`, 
        {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include"
        }
    );
    return response;
}

export async function logout() {
    let response = await fetch(
        `${path}/logout`,
        {
            method: 'POST',
            credentials: "include"
        }
    )
    return response;
}

export async function register(data) {
    let response = await fetch(
        `${path}/register`, 
        {
            method: 'PUT',
            body: JSON.stringify(data),
            credentials: "include"
        }
    );
    return response;
}

