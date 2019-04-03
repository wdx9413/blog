import React from 'react';
import Home from './home';
import '../../styles/Home.scss';
import Head from './Head';
import Foot from './Foot';
import Article from './Article';
import {Route, Switch} from 'react-router-dom';
import NotMatch from '../common/NotMatch';
import About from './about';
import Message from './message';
import Catergory from '../../containers/category';
import Archive from './archive';
export default class Main extends React.Component{
    
    render() {
        return (
            <div>
                <Head></Head>
                <div className='home'>
                    <Switch>
                        <Route path='/article/:id' component={Article}></Route>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/archive' component={Archive}></Route>
                        <Route path='/category' component={Catergory}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/message' component={Message}></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
                <Foot></Foot>
            </div>
                
        )
    }
}