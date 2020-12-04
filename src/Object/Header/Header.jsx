import React from 'react';
import { GrRefresh } from 'react-icons/gr';

import './Header.css';

const Header = () => {
    return(
        <>
            <div className="wrapper-header">
                <section className="menu"></section>
                <h1 className="text-header">Frutas</h1>
                <GrRefresh />
            </div>
        </>
    )
}

export default Header;