import React from 'react';
import '../../../styles/Back/Main.scss';
import {Switch, Route, Link} from 'react-router-dom';
import { logout } from '../../../api/Account';
import Loadable from "react-loadable";
import CustomLoading from '../../common/CustomLoading';
import NotMatch from '../../common/NotMatch';

const ItemList = Loadable({loader: () => import('../../../containers/back/ItemList'), loading: CustomLoading});
const Article = Loadable({loader: () => import('./Article'), loading: CustomLoading});
const Edit = Loadable({loader: () => import('./Edit'), loading: CustomLoading});

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/admin/'>
                    <div className='back-main'>
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