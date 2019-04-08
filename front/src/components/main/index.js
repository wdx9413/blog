import React from 'react';
import '../../styles/Home.scss';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import CustomLoading from '../common/CustomLoading';

const Head = Loadable({loader: () => import('./Head'), loading: CustomLoading});
const Foot = Loadable({loader: () => import('./Foot'), loading: CustomLoading});
const Home = Loadable({loader: () => import('./home'), loading: CustomLoading});
const About = Loadable({loader: () => import('./about'), loading: CustomLoading});
const Message = Loadable({loader: () => import('./message'), loading: CustomLoading});
const Archive = Loadable({loader: () => import('./archive'), loading: CustomLoading});
const Catergory = Loadable({loader: () => import('../../containers/category'), loading: CustomLoading});
const Article = Loadable({loader: () => import('./Article'), loading: CustomLoading});
const NotMatch = Loadable({loader: () => import('../common/NotMatch'), loading: CustomLoading});

export default class Main extends React.Component{
    
    render() {
        return (
            <div>
                <Head></Head>
                <div className='home'>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/archive' component={Archive}></Route>
                        <Route path='/category' component={Catergory}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/message' component={Message}></Route>
                        <Route path='/article/:id' component={Article}></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
                <Foot></Foot>
            </div>
                
        )
    }
}