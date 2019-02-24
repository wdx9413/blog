import React from 'react';
import Item from './Item';
import '../../styles/ItemList.scss';
export default class ItemList extends React.Component {
    state = {
        articles: [
            {
                id: '312',
                title: 'da',
                description: 'asdfasdasa'
            }
        ]
    }
    componentWillReceiveProps() {
        // TODO 请求列表
    }
    render() {
        return (
            <ul className='item-list'>
                {
                    this.state.articles.map(article => 
                        <Item article={article} key={article.id}></Item>
                    )
                }
            </ul>
        );
    }
}