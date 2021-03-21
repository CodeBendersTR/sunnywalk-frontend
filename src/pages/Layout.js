import React from 'react';

import { NavLink } from "react-router-dom";

const Layout = (props) => (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/profile'>Profile</NavLink>
                    </li>
                </ul>
            </nav>
            {props.children}
        </div>
)

export default Layout;