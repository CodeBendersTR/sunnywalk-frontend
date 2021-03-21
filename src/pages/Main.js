import React from 'react';

import { Link } from "react-router-dom";

const Main = () => (
        <div>
                <h1>This is the Main Page</h1>
                <Link exact to='/login'>Login</Link>
        </div>
)

export default Main;