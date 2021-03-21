import React from 'react';

import { Link } from "react-router-dom";

const NotFound = () => (
        <div>
                <h1>This is the NotFound Page</h1>
                <Link exact to='/'>Main</Link>
        </div>
)

export default NotFound;