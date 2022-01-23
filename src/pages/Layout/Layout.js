import React from 'react';

import css from "../../App.module.css";
import {Link,NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}></NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;