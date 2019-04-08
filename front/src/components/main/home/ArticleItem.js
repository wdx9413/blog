import React from 'react';
import '../../../styles/Item.scss';
import {Link} from 'react-router-dom';
import ItemListConfig from '../../../config/ItemListConfig';
export default class Item extends React.Component {
    render() {
        return (
            <Link to={'/article/' + this.props.article.id} className='custom-link'>
                <li className='item'>
                    <div className='title'>{this.props.article.title}</div>
                    {/* <p className='description'>{this.props.article.description}</p> */}
                    {/* <img alt='avatar' sr=''></img>
                    <span>dassss</span> */}
                    <span>&nbsp;{ItemListConfig[this.props.article.type-1].name}&nbsp;|&nbsp;&nbsp;</span>
                    <span>{this.props.article.date.substring(0,10)}</span>
                    {/* <span className='date'>{this.props.article.date.substring(0,10)}</span> */}
                    {/* <span className='date'>评论数650</span> */}
                </li>
            </Link>
        );
    }
}