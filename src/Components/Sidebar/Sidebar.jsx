import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {
    const mainmenu=[
        {
            id:1,
            name:"Dashboard",
            link:"/",
            icon:"/images/ic_dashboard.svg"
        },
        {
            id:2,
            name:"Recruitment",
            link:"/",
            icon:"/images/ic_recruitment.svg"
        },
        {
            id:3,
            name:"Schedule",
            link:"/",
            icon:"/images/ic_calendar.svg"
        },
        {
            id:4,
            name:"Employee",
            link:"/",
            icon:"/images/ic_employee.svg"
        },
        {
            id:5,
            name:"Department",
            link:"/",
            icon:"/images/ic_department.svg"
        },
    ]

    const other=[
        {
            id:1,
            name:"Support",
            link:"/",
            icon:"/images/ic_support.svg"
        },
        {
            id:2,
            name:"Settings",
            link:"/",
            icon:"/images/ic_settings.svg"
        }
    ]
  return (
    <div className='sidebar'>
        <div className='sidebar-heading'>
            <img src="/images/Vasitum Logo.svg" alt="logo" className='hidden_small'/>
            <img src="/images/logo.svg" alt="logo" className='hidden_large'/>
        </div>
        <div className='menu'>
            <h1 className='lightgreytext'>MAIN MENU</h1>
            <div>
                {
                    mainmenu.map((menu)=>{
                       return <Link key={menu.id}><li className={`${menu.id===1?'orangeredtext':'darkgreytext'} nav`}><img src={menu.icon} alt="icon"/><span className='hidden_small'>{menu.name}</span></li></Link>
                    })
                }
            </div>
        </div>
        <div className='other'>
            <h1 className='lightgreytext'>OTHER</h1>
            <div>
                {
                    other.map((otheritem)=>{
                        return <Link><li className='darkgreytext nav'><img src={otheritem.icon} alt="icon"/> <span className='hidden_small'>{otheritem.name}</span></li></Link>
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar
