import { path } from ".";

export async function uploadFileAsync(file) {
    const formData = new FormData();
    formData.append('image', file, file.name);
    let response = await fetch(`${path}/upload`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        // headers: {
        //     'content-type': 'multipart/form-data'
        // }
    });
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return {data: {link : `${path}/images/${jsonObj.data}`}}
    }
    console.error("error"); 
}