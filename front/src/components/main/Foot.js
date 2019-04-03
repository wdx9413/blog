import React from 'react';
import '../../styles/Foot.scss';

export default class Foot extends React.Component {

    render() {
        return (
            <footer className='foot'>
                <div className='center'>
                    {/* <div className='address'></div> */}
                    <div className='contact'>
                        <h3 className='title'>Contacts</h3>
                        <ul className='content'>
                            <li>Email: wdx9413@163.com</li>
                            {/* <li>Phone: 15601125154</li> */}
                        </ul>
                    </div>
                    <div className='link'>
                        <h3 className='title'>Links</h3>
                        <ul className='content'>
                            <li><a href='https://github.com/wdx9413' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
                        </ul>
                    </div>
                    {/* <div className=''>© 2019 - 2019 </div> */}
                </div>
            </footer>
        );
    }

}