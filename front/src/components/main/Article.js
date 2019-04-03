import React from 'react';
import '../../styles/Article.scss';
import date from '../../assets/date.png';
import {getArticleByIdAsync} from '../../api/Article';
import Comment from './Comment';
export default class Article extends React.Component {
    state = {
        article : {
            title: '',
            author: '',
            date: '',
            content: '',
        }
    }
    componentWillMount() {
        getArticleByIdAsync(this.props.match.params.id)
            .then((data) => {
                this.setState(Object.assign({}, this.state, {article: data}))
            });
    }
    render() {
        return (
            <div className='article'>
                <h3 className='title'>{this.state.article.title}</h3>
                <div className='info'>
                    <img alt='date' src={date}></img>
                    <span className='date'>{this.state.article.date.substring(0,10)}</span>
                </div>
                <div className='content' dangerouslySetInnerHTML={{__html:this.state.article.content}}></div>
                <Comment articleId={this.props.match.params.id}></Comment>
            </div>
        );
    }
}