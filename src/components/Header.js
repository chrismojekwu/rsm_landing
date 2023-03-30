import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="landing-header">
            <a 
                className="header-anchor"
                onClick={() => props.setDisplay(0)}
            >
                 <h1 className="landing-title-header">react-<span className="multiparts">smart<span className="hover-color">multiparts</span></span></h1>
            </a>
        </div>
    )
};

export default Header;