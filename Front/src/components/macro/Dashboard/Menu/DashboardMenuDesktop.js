import React from 'react'
import './Menu.css'
import MenuItems from './MenuItems';
import {ReactComponent as UserIcon} from '../../../../assets/icons/dashboard/user.svg'


function DashboardMenuDesktop(props) {

    return(
        <>
            <div className="menu-lateral-container col-lg-3 d-none d-lg-block">
                <div className="menu-lateral mt-5">
                    <div className="id-usuario-desktop d-flex justify-content-around align-items-center">
                        <UserIcon/>
                        <h3 className="d-inline-block ms-2 mb-0 text-center">{props.username}</h3>
                    </div>
                    <div className="col-12 menu-items-container">
                        <MenuItems/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardMenuDesktop