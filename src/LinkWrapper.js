import React from 'react';
import { NavLink } from 'react-router-dom';


const LinkWrapper = props => {
    return (
        //Spread operator recieve any method that exists on NavLink
        <NavLink activeStyle={{fontWeight: "bold"}} {...props}></NavLink>
    );
}

export default LinkWrapper;
