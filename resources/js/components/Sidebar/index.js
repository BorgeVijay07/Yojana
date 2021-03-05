import React from 'react'
import {SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute
        } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        ABOUT
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        SERVICES
                    </SidebarLink>
                    <SidebarLink to='schemes' onClick={toggle}>
                        SCHEMES
                    </SidebarLink>
                    <SidebarLink to='contact-us' onClick={toggle}>
                        CONTACT US
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sign-up'>
                        SIGN UP
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
