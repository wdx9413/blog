import { path } from ".";

export async function insertMessage(visitorName, content, email) {
    
    let response = await fetch(`${path}/message`, 
        {
            method: 'PUT',
            body: JSON.stringify({visitorName, content, email}),
            credentials:'include',         
            headers: {
                'content-type': 'application/json'
            },
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error('insert message error');
}

export async function getAllMessage() {
    let response = await fetch(`${path}/messages`,
        {
            method: 'GET',
            credentials: 'include'
        }
    );
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return jsonObj.data;
    }
    console.error("get all message error");
}