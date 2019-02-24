import React from 'react';
import icon from '../../assets/icon.jpg';
import '../../styles/Head.scss';
import {Link} from 'react-router-dom';
export default class Head extends React.Component {
    render() {
        return (
            <div className='head'>
                <img className='head-icon' alt='logo' src={icon}></img>
                <ul className='head-list'>
                    <li className='head-list-1'>
                        <Link to='/'>首页</Link>
                    </li>
                    <li className='head-list-1'>前端</li>
                    <li className='head-list-1'>后端</li>
                    <li className='head-list-1'>数据库</li>
                    <li className='head-list-1'>系统</li>
                    <li className='head-list-1'>关于</li>
                </ul>
            </div>
        );
    }
}