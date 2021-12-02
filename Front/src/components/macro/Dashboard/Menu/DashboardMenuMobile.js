import React, { useState } from 'react'
import MenuItems from './MenuItems'
import './Menu.css'
import {ReactComponent as UserIcon} from '../../../../assets/icons/dashboard/user.svg'
import {ReactComponent as ArrowIcon} from '../../../../assets/icons/dashboard/arrow.svg'

function DashboardMenuMobile(props) {
    const [isOpen, setIsOpen] = useState(false)
    let btnClasses = isOpen === true ? "btn-arrow btn-aberto" : "btn-arrow"
    let menuClasses = isOpen === true ? "col-12 menu-mobile-items-container" : "col-12 menu-mobile-items-container menu-fechado"

    const handleOpenMenu = () => {
        if (isOpen == true){
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }


    return(
        <>
            <div className="row menu-mobile d-lg-none">
                <div className="menu-mobile-header col-12 d-flex justify-content-between align-items-center">
                    <div className="id-usuario d-flex">
                        <UserIcon/>
                        <h4 className="d-inline-block ms-2 mb-0">{props.username}</h4>
                    </div>
                    <div className={btnClasses} onClick={handleOpenMenu} >
                         <ArrowIcon/>
                    </div>
                </div>
                <div className={menuClasses}>
                    <MenuItems toggleMobileMenu={handleOpenMenu}/>
                </div>
            </div>
        </>
    )
}

export default DashboardMenuMobile