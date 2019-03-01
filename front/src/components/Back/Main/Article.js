import React from 'react';
// import '../../styles/Article.scss';
// import author from '../../assets/author.png';
import date from '../../../assets/date.png';
import {Link, Redirect} from 'react-router-dom';
import { getArticleByIdAsync, deleteArticleById } from '../../../api';
export default class Article extends React.Component {
    state = {
        article : {
            id: '',
            title: '',
            author: '',
            writeTime: '',
            content: ''
        }
    }
    componentWillMount() {
        getArticleByIdAsync(this.props.match.params.id)
            .then((data) => {
                this.setState(Object.assign({}, this.state, {article: data}))
            })
    }
    render() {
        return (
            <div className='article'>
                <button className='change'><Link to={{pathname: '/admin/edit', state: this.state.article}}>change</Link></button>
                <button className='del' onClick={this.deleteArticle.bind(this)}>delete</button>
                <h3 className='title'>{this.state.article.title}</h3>
                <div className='info'>
                    <img alt='date' src={date}></img>
                    <span className='date'>{this.state.article.date}</span>
                </div>
                <div className='content' dangerouslySetInnerHTML={{__html:this.state.article.content}}></div>
            </div>
        );
    }
    
    async deleteArticle() {
        await deleteArticleById(this.state.article.id);
        this.props.history.push('/admin');
    }
}