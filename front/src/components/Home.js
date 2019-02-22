import React from 'react';
import Head from './Head';
var m = {
    height: '900px',
    backgroundColor: 'blue'
}
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Head></Head>
                <div style={m}></div>
            </div>
        );
    }
}