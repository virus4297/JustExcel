import React, { Component } from 'react';
import AppNavBar from './AppNavBar';
import Courselist from './Courselist';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AppNavBar/>
                <Courselist/>
            </div>
        );
    }
}

export default HomePage;