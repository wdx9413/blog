import { path } from ".";
export async function getRecentCommentListAsync() {
    let response = await fetch(`${path}/comments/recent`,{
        method: 'GET',
        credentials: 'include'
    })
    let jsonObj = await response.json()
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("get comments error")
    return []
}
export async function getCommentsByArticleIdAsync(articleId) {
    let response = await fetch(
        `${path}/comments?articleId=` + articleId,
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    return [];
}
export async function insertComment(content, visitorName, visitorEmail, articleId) {
    let response = await fetch(
        `${path}/comment`,
        {
            method: 'PUT',
            body: JSON.stringify({ content, visitorName, visitorEmail, articleId }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        console.log('insert comment success');
        return true;
    }
    console.error('insert comment error');
}

export async function getReplysByCommentIdAsync(commentId) {
    let response = await fetch(
        `${path}/reply?commentId=` + commentId,
        {
            method: 'GET',
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    return [];
}