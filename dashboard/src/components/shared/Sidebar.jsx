import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-neutral-900 p-3 w-60 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24} />
                <span className='text-neutral-100 mx-2'>UandIShop</span>
            </div>
            <hr/>
            <div className='flex-1 py-4'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div className="flex py-1 flex-1 flex-col gap-0.5" >
                        <SidebarLink key={item.key} item={item}/>
                    </div>
                ))}
               
            </div>
            <hr/>
            <div>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <div className="flex flex-col gap-0.5 pt-2 border-neutral-700">
                        <SidebarLink key={item.key} item={item}/>
                    </div>
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
            </div>
        </div>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link to={item.path}className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
export default Sidebar