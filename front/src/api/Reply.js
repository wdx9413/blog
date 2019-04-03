import { path } from ".";
export async function insertReply(content, visitorName, visitorEmail, commentId, targetVisitorId) {
    let response = await fetch(
        `${path}/reply`,
        {
            method: 'PUT',
            body: JSON.stringify({ content, visitorName, visitorEmail, commentId, targetVisitorId }),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        console.log('insert reply success');
        return true;
    }
    console.error('insert reply error');
}