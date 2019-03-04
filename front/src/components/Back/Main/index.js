import React from 'react';
import ItemList from '../../../containers/Back/ItemList';
import '../../../styles/Main.scss';
import {Switch, Route, Link} from 'react-router-dom';
import Article from './Article';
import Edit from './Edit';
import NotMatch from '../../NotMatch';
import { logout } from '../../../api';
export default class Main extends React.Component {
    componentWillMount() {
        this.props.onChange(0);
    }
    componentWillReceiveProps() {
        this.props.onChange(0);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/admin/'>
                    <div className='main'>
                        {/* <span>{this.props.username}</span> */}
                        
                        <button onClick={() => {logout(); this.props.history.push('/admin/login')}}>logout</button>
                        <select className='type-show'  onChange={(e) => {this.props.onChange(e.target.value)}}>
                            <option value='0'>全部</option>
                            <option value='1'>前端</option>
                            <option value='2'>后端</option>
                            <option value='3'>数据库</option>
                            <option value='4'>系统</option>
                            <option value='5'>其他</option>
                        </select>
                        <button className='new-btn'><Link to='/admin/edit'>新建文章</Link></button>
                        <ItemList ></ItemList>
                    </div>
                </Route>
                <Route path='/admin/edit' component={Edit}></Route>
                <Route path='/admin/article/:id' component={Article}></Route>
                <Route component={NotMatch}></Route>
            </Switch>
        );
    }
}