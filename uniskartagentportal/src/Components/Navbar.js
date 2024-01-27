import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { getUserInfo, removeLocalStorageItem } from '../Utils/Helpers';

const Navbar = () => {
    const {pathname} = useLocation()
    
  return (
    <nav className="navbar navbar-inverse margin-bottom-0 CourceFinderLayout">
    <div className="padding-left-10 padding-right-10">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed mobile-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                <span className="icon-bar icon-bar-1"></span>
                <span className="icon-bar icon-bar-2"></span>
                <span className="icon-bar icon-bar-3"></span>
            </button>
            <NavLink to="/dashboard" className="uniskart-agent">
                <h3>Uniskart Agent</h3>
            </NavLink>
        </div>
        <div className="navbar-collapse collapse ipad-navbar" id="navbar-collapse-1">
            <div className="desktop-login-menu hidden-sm hidden-xs">
                <form action="/Account/LogOff" className="navbar-right" id="logoutForm" method="post"><input name="__RequestVerificationToken" type="hidden" value="I1Xr3wLv06YH-3h18EbCBCJz9U3pMhaKTJlY94krfmTWvGZHxOgTWZE5roe06zcSnyGFtDtZcA2RLBpSu8oDcJiBSl4zjxURvCv0_X59JJiGiii5GTmftGsoqxj0vuzuBR0ax-nNfCSL7udyoPBogw2" />            <div className="tooltipUsername">
                    <ul className="nav navbar-nav navbar-right margin-right-0">
                        <li className="dropdown hover-li">
                            <a className="dropdown-toggle customelink" data-toggle="dropdown" href="#">
                                <span className="userEpilepsy">Hello,&nbsp;&nbsp;{ getUserInfo().name} </span>
                                <span className="fa fa-angle-down" style={{ marginLeft: "3px" }}></span>
                            </a>
                            <ul className="dropdown-menu hover-dropdown-menu">

                                <li style={{ width: "100%" }}><a href="/Application/displayNotifications?page=1&amp;pageSize=10">All Notifications</a></li>
                                <li style={{ width: "100%" }}><NavLink to="/login" onClick={()=>removeLocalStorageItem("token")}>Log Out</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </form></div>

            <div className="mobile-login-menu hidden-md hidden-lg">
                <form action="/Account/LogOff" className="" id="logoutForm" method="post"><input name="__RequestVerificationToken" type="hidden" value="-cARQZV3EJ1PXiZuZMmygisj6dqx32lHfkIxfQWXWS52uTZzO33fQvwlpd9uXy_z87uNr2UDB77ALt0-PcEQKLyxxfVKGjhAZE9i2gPBGjbttCxt0jUpy4NCvBlrL3RSZdPGHRmQZ8o-i93CXq82zA2" />            <ul>
                    <li className="usernametxt">
                        <a href="#">
                            Hello, <span>{ getUserInfo().name} </span>
                        </a>
                    </li>
                    <li style={{ width: "100%" }}><a href="/Application/displayNotifications?page=1&amp;pageSize=10">All Notifications</a></li>
                    <li style={{ width: "100%" }}><NavLink to="/login" onClick={()=>removeLocalStorageItem("token")}>Log Out</NavLink></li>
                </ul>
                </form></div>




            <div id="NotifSection">
                <ul className="notification">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle notifybell" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20">
                                <defs>
                                    <clipPath id="clip-path">
                                        <path id="Path_15" data-name="Path 15" d="M8.5,0a2.006,2.006,0,0,0,2-2h-4a2.006,2.006,0,0,0,2,2ZM15-6v-5.5a6.5,6.5,0,0,0-5-6.32v-.68A1.5,1.5,0,0,0,8.5-20,1.5,1.5,0,0,0,7-18.5v.68A6.5,6.5,0,0,0,2-11.5V-6L0-4v1H17V-4L15-6ZM13-5H4v-6.5A4.494,4.494,0,0,1,8.5-16,4.494,4.494,0,0,1,13-11.5V-5Z" fill="none" clipRule="evenodd" />
                                    </clipPath>
                                    <clipPath id="clip-path-2">
                                        <path id="Path_14" data-name="Path 14" d="M-262,7212H1178V-314H-262Z" fill="none" />
                                    </clipPath>
                                </defs>
                                <g id="Group_16" data-name="Group 16" transform="translate(0 20)">
                                    <g id="Group_15" data-name="Group 15" clip-path="url(#clip-path)">
                                        <g id="Group_14" data-name="Group 14" clip-path="url(#clip-path-2)">
                                            <path id="Path_13" data-name="Path 13" d="M-5-25H22V5H-5Z" fill="var(--icoColor)" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className="badge" style={{ display: 'none' }} id="badgestream"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <ul className="nav navbar-nav navbar-center margin-right-0 ipad-nav-right ulteam">
                <li><NavLink className={pathname==="/dashboard" && "active-menu"} to="/dashboard">Dashboard</NavLink></li>
                <li><a className="" href="">Manage Applications</a></li>
                <li><a className="" href="">Manage Students</a></li>
                <li><NavLink className={pathname==="/search-program" && "active-menu"}  to="/search-program">Search Program</NavLink></li>
            </ul>

        </div>
    </div>
</nav>
  )
}

export default Navbar