import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItem/MenuItem';
import "./Dropdown.css";

const Dropdown = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(false);

    return (
        <>
            <ul
            onClick={handleClick}
            className={
                click ? ' clicked' : 'dropdown-menu'
            }
            >
                {
                    MenuItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link 
                                className={item.cName}
                                to={item.path}
                                onClick={()=>setClick(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Dropdown
