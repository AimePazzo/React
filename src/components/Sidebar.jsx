import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Sishopware} from 'react-icons/Si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@sysncfusion/ej2-react-popups';
import {Links} from '../data/dummy';
const Sidebar =() =>{

    const activeMenu = true;
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && ( <>
                <div className="flex justify-between items-center">
                    <Link to="/" onclick={() => {}} className="items-center">
                        <Sishopware /> <spam>Shoppy</spam>
                    </Link>
                
                </div>
                </>) }
        </div>
    )
}

export default Sidebar