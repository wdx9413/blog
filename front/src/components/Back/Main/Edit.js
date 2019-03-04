import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../styles/NewArticle.scss'
import { newArticle, updateArticle } from '../../../api';
export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: props.location.state && props.location.state.content
                ? EditorState.createWithContent(
                    ContentState.createFromBlockArray(htmlToDraft(props.location.state.content).contentBlocks)
                )
                : EditorState.createEmpty(),
            id: props.location.state && props.location.state.id ? props.location.state.id : ''
        }
    }

    render() {
        return (
            <div className='new-article'>
                
                <button className='push' onClick={this.createOrEditArticle.bind(this)}>发表文章</button>
                <select defaultValue={this.props.location.state && this.props.location.state.type} className='type'>
                    <option value='1'>前端</option>
                    <option value='2'>后端</option>
                    <option value='3'>数据库</option>
                    <option value='4'>系统</option>
                    <option value='5'>其他</option>
                </select>
                <input className='title' placeholder='title' defaultValue={this.props.location.state && this.props.location.state.title}></input>
                <Editor editorState={this.state.editorState} onEditorStateChange={this.change.bind(this)} placeholder='please input...' className='editor'></Editor>
                <button className='back' onClick={() => this.props.history.push('/admin')}>back</button>
            </div>
        );
    }
    change(editorState) {
        this.setState(Object.assign({}, this.state, { editorState }));
    }

    async createOrEditArticle(e) {
        // title不为空
        var children = e.target.parentNode.children;
        var title = children[2].value;
        if (title.length <= 0) {
            children[2].style.outlineWidth = '1px';
            setTimeout(() => {
                children[2].style.outlineWidth = '0px';
            }, 300);
            return;
        }
        //
        var type = children[1].value;
        var content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        var userId = 'f9c2d35d463d45839f5393d6706023bfs';
        var article = {title, type, content, userId};
        if (this.state.id === '') {
            await newArticle(article);
        } else {
            article.id = this.state.id;
            await updateArticle(article);
        }
        this.props.history.push('/admin');
    }
}