import { path } from ".";

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
    console.error("login error")
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
            body: username,
            credentials: 'include'
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    return true;
}