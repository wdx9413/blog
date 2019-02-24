import React from 'react';
import '../../styles/Item.scss';
import {Link} from 'react-router-dom';
export default class Item extends React.Component {
    render() {
        return (
            <Link to={'/article/' + this.props.article.id}>
                <li className='item'>
                    <h2 className='title'>{this.props.article.title}</h2>
                    <p className='description'>{this.props.article.description}</p>
                    <img alt='avatar' sr=''></img>
                    <span>dassss</span>
                    <span>&nbsp;|&nbsp;{'前端'}&nbsp;|&nbsp;{'2019.7'}</span>
                </li>
            </Link>  
        );
    }
}