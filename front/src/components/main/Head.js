import React from 'react';
// import icon from '../../assets/icon.jpg';
import '../../styles/Head.scss';
import {Link} from 'react-router-dom';
export default class Head extends React.Component {
    render() {
        return (
            <div className='head'>
                {/* <img className='head-icon' alt='logo' src={icon}></img> */}
                {/* <div className='head-title'>个人博客</div> */}
                
                <ul className='head-list'>
                    <li className='head-list-unit'>
                        <Link to='/' className='link'>首页</Link>
                    </li>
                    {/* <li className='head-list-unit'>
                        <a href='https://github.com/wdx9413/blog/tree/develop' className='link' target='_blank' rel="noopener noreferrer">博客源码</a>
                    </li> */}
                    <li className='head-list-unit'>
                        <Link to='/archive' className='link'>归档</Link>
                    </li>
                    <li className='head-list-unit'>
                        <Link to='/category' className='link'>分类</Link>
                    </li>
                    <li className='head-list-unit'>
                        <Link to='/message' className='link'>留言</Link>
                    </li>
                    <li className='head-list-unit'>
                        <Link to='/about' className='link'>关于我</Link>
                    </li>
                </ul>
                <div className='head-search'>
                    <input className='search-input'/>
                    <input className='search-btn' type='button' value='search' onClick={this.search.bind(this)}/>
                </div>
            </div> 
        );
    }
    search() {
        let searchContent = document.getElementsByClassName('search-input')[0].value;
        window.open('https://cn.bing.com/search?q='+searchContent);
    }
}