import React from 'react'
import '../../../styles/About.scss';
export default class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='content'>
                    <h3 className='header'>关于我</h3>
                    <hr/>
                    <h3 className='title'>简介</h3>
                    <p>Java入门级码农</p>
                    <p>水平很low，正在努力学习中</p>
                    <p>希望可以变强变秃</p>
                    <p>加油！</p>
                </div>
            </div>
        )
    }
}