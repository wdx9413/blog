import React from 'react';
import Item from './Item';
import '../../styles/ItemList.scss';
export default class ItemList extends React.Component {
    render() {
        return (
            <ul className='item-list'>
                {
                    this.props.articles.map(article => 
                        <Item article={article} key={article.id}></Item>
                    )
                }
            </ul>
        )
    }
}