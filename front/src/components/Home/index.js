import React from 'react';
import ItemList from '../../containers/ItemList';
import '../../styles/Home.scss';
import Head from './Head';
import Foot from './Foot';
import Article from './Article';
import {Route, Switch} from 'react-router-dom';
import NotMatch from '../NotMatch';
export default class Home extends React.Component{
    componentWillMount() {
        this.props.setDefaultArticles();
    }
    render() {
        return (
            <div>
                <Head></Head>
                <div className='home'>
                    <Switch>
                        <Route path='/article/:id' component={Article}></Route>
                        <Route exact path='/'>
                            <ItemList></ItemList>
                        </Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
                <Foot></Foot>
            </div>
                
        )
    }
}