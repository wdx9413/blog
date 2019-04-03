import React from 'react';
import '../../styles/Item.scss';
import {Link} from 'react-router-dom';
export default class Item extends React.Component {
    render() {
        return (
            <Link to={'/article/' + this.props.article.id}>
                <li className='item'>
                    <span className='title'>{this.props.article.title}</span>
                    {/* <p className='description'>{this.props.article.description}</p> */}
                    {/* <img alt='avatar' sr=''></img>
                    <span>dassss</span> */}
                    {/* <span>&nbsp;|&nbsp;{'前端'}&nbsp;|&nbsp;{'2019.7'}</span> */}
                    <span className='date'>{this.props.article.date.substring(0,10)}</span>
                </li>
            </Link>  
        );
    }
}