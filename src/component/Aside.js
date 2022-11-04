import React from 'react'
import NavMenu from './NavMenu'
import { COMPANY } from '../App'

const Aside = () => {
    return (
        <aside>
            <div className="aside_lnb">
                <NavMenu />
            </div>

            <div className="aside_customer">
                <img src={process.env.PUBLIC_URL + '/img/logo_aside.png'} alt="" />
                <p>
                    <strong>전화문의 : {COMPANY.tel}</strong>
                    <hr />
                    <span>e-mail : {COMPANY.email}</span>
                </p>
            </div>
        </aside>
    )
}

export default Aside