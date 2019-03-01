import React from 'react';
import icon from '../../assets/icon.jpg';
import '../../styles/Head.scss';
import CustomButton from '../../containers/CustomButton';
export default () => (
    <div className='head'>
        <img className='head-icon' alt='logo' src={icon}></img>
        <ul className='head-list'>
            <li className='head-list-1'>
                <CustomButton type='0'>首页</CustomButton>
            </li>
            <li className='head-list-1'>
                <CustomButton type='1'>前端</CustomButton>
            </li>
            <li className='head-list-1'>
                <CustomButton type='2'>后端</CustomButton>
            </li>
            <li className='head-list-1' >
                <CustomButton type='3'>数据库</CustomButton>
            </li>
            <li className='head-list-1' >
                <CustomButton type='4'>系统</CustomButton>
            </li>
            <li className='head-list-1'>
                <CustomButton type='5'>其他</CustomButton>
            </li>
            {/* <li className='head-list-1'>
                <span>关于</span>
            </li> */}
        </ul>
    </div> 
)