import React from 'react';
import Item from '../ArticleItem';
import '../../../styles/Main.scss';
import RecommendConfig from '../../../config/RecommendConfig'
import { getRecentCommentListAsync } from '../../../api/Comment';
import { getAllArticlesAsync } from '../../../api/Article';
export default class Home extends React.Component {
    state = {
        commentList: [],
        articleList: []
    }
    componentWillMount() {
        getAllArticlesAsync().then(articleList => {
            this.setState(Object.assign({}, this.state, {articleList}))
        })
        getRecentCommentListAsync().then(commentList => {
            this.setState(Object.assign({}, this.state, { commentList }))
        })
    }
    render() {
        return (
            <div className='main'>

                <div className='right'>
                    {
                        this.state.commentList.length > 0 
                            ? <div className='main-re'>
                                <h3 className='recommend-title'>&nbsp;最新评论</h3>
                                <ul className='recommend'>
                                    {
                                        this.state.commentList.map((comment, index) =>
                                            <li key={index} className='recommend-item'>
                                                <span>{comment.visitorName}:</span>comment.content
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                            : null
                    }

                    <div className='main-re'>
                        <h3 className='recommend-title'>&nbsp;推荐链接</h3>
                        <ul className='recommend'>
                            {
                                RecommendConfig.map((e, index) =>
                                    <li key={index} className='recommend-item'><a href={e.href} target='_blank' rel="noopener noreferrer" >{e.name}</a></li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div className='main-content'>
                    {/* <ul className='main-list'>
                        {
                            ItemListConfig.map(({type, name}, index) => {
                                return (
                                    <li key={index} className={'main-list-unit' +( type === this.state.type ? ' selected' : '')} onClick={this.changeType.bind(this, type)}>
                                        <CustomButton type={type}>{name}</CustomButton>
                                    </li>
                                );
                            })
                        }
                    </ul> */}

                    <ul className='item-list'>
                        {
                            this.state.articleList.map(article =>
                                <Item article={article} key={article.id}></Item>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}