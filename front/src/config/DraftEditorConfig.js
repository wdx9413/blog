import { uploadFileAsync } from "../api/UploadFile";
// import emoji from '../assets/date.png';
export default {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'history'],
    inline: {
        inDropdown: false,
        options: ['bold', 'italic', 'underline', 'strikethrough']
    },
    blockType: {
        inDropdown: true,
        options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote', 'Code']
    },
    list: {
        inDropdown: false,
        options: ['unordered', 'ordered']
    },
    textAlign: {
        inDropdown: false,
        options: ['left', 'center', 'right'],
    },
    link: {
        inDropdown: false,
        options: ['link']
    },
    image: {
        uploadCallback: uploadFileAsync,
        alt: {
            present: true,
            mandatory: true
        },
        previewImage: true
    },

}