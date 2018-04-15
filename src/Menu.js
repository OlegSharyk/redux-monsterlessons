import React, { Component } from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/" >Tracks</Link></li>
                    <li><Link to="/about" >About</Link></li>
                </ul>
            </div>
        )
    }
}

export default Menu;