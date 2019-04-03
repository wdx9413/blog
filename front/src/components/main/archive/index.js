import React, { Component } from 'react';
import '../../../styles/Archive.scss'
import { getAllArticlesAsync } from '../../../api/Article';
import { Link } from "react-router-dom";
class Archive extends Component {
    state = {
        articleList: []
    }
    componentWillMount() {
        getAllArticlesAsync().then(articleList => {
            this.setState(Object.assign({}, this.state, {articleList}))
        })
    }
    render() {
        return (
            <div className='archive'>
                <div className='archive-content'>
                    <h3>归档</h3>
                    <hr/>
                    <ul >
                        {
                            this.state.articleList.map(article =>
                                <li key={article.id}>
                                    <span className='date'>{article.date.substring(0,10)}</span>
                                    <Link className='title' to={`/article/${article.id}`}>{article.title}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Archive;
