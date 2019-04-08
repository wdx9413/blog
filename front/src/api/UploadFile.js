import { imgPath } from ".";

export async function uploadFileAsync(file) {
    const formData = new FormData();
    formData.append('image', file, file.name);
    let response = await fetch(`${imgPath}/upload`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        // headers: {
        //     'content-type': 'multipart/form-data'
        // }
    });
    let jsonObj = await response.json();
    if (jsonObj.code === 20000) {
        return {data: {link : `${imgPath}/images/${jsonObj.data}`}}
    }
    console.error("error"); 
}