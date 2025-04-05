import React from 'react';
import './Header.css';
import { IoApps,IoSettingsOutline } from "react-icons/io5";
import SignInButton from './SignInButton';

function Header() {
    return (
        <header >
            <div className='icons'>
                <div className='leftContainer'>
                    <IoApps className='appGridIcon'/>  
                </div>
                <div className='rightContainer'>
                <IoSettingsOutline className='settingsIcon' />
                <SignInButton/>
                </div>
            </div>
        </header>
    );
}

export default Header;
