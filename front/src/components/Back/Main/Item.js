import React from 'react';
// import '../../styles/Item.scss';
import {Link} from 'react-router-dom';
export default class Item extends React.Component {
    render() {
        return (
            <Link to={'/admin/article/' + this.props.article.id}>
                <li className='item'>
                    <span className='title'>{this.props.article.title}</span>
                    <span className='date'>{this.props.article.date}</span>
                </li>
            </Link>  
        );
    }
}