import React from 'react';
import '../../styles/Article.scss';
import author from '../../assets/author.png';
import date from '../../assets/date.png';
export default class Article extends React.Component {
    state = {
        article : {
            title: '',
            author: '',
            writeTime: '',
            content: ''
        }
    }
    componentWillMount() {
        let articleId = this.props.location.pathname.split('/')[2];
        console.log(articleId);
        this.setState({
            title: '2019',
            author: 'wdongxxxsa',
            date: '1992-15-21',
            content: 'daskl,具体内容;'
        });
    }
    render() {
        return (
            <div className='article'>
                <h3 className='title'>{this.state.title}</h3>
                <div className='info'>
                    <img alt='author' src={author}></img>
                    <span className='author'>{this.state.author}</span>
                    <img alt='date' src={date}></img>
                    <span className='date'>{this.state.date}</span>
                </div>
                <div className='content'>
                    {this.state.content}
                </div>
            </div>
        );
    }
}