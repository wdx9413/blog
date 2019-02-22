import React from 'react';
import icon from '../assets/icon.jpg';
import '../styles/Head.scss';
export default class Head extends React.Component {
    render() {
        return (
            <div className='head'>
                <img className='head-icon' alt='' src={icon}></img>
                <ul className='head-list'>
                    <li className='head-list-1'>首页</li>
                    <li className='head-list-1'>文章</li>
                </ul>
            </div>
        );
    }
}