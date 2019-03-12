import Utils from "../utils";
const path = 'http://39.97.166.150:8080';

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
        jsonObj.data.date = Utils.formatJavaDateString(jsonObj.data.date);
        return jsonObj.data;
    }
    return {};
}
export async function getArticlesByTypeAsync(type) {
    let response = await fetch(
        `${path}/articles?type=${type}`, 
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        jsonObj.data.forEach(element => {
            element.date = Utils.formatJavaDateString(element.date);
        });
        return jsonObj.data;
    }
    return [];
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

export async function checkAuth() {
    let response = await fetch(
        `${path}/check`, 
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    return false;
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
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error(jsonObj.data);

}

export async function logout() {
    let response = await fetch(
        `${path}/logout`,
        {
            method: 'POST',
            credentials: "include"
        }
    )
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("logout error");
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
    let jsonObj = await response.json()
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("register error");
}

export async function testUser(username) {
    let response = await fetch(
        `${path}/testUser`, 
        {
            method: 'POST',
            body: username
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    return true;
}

