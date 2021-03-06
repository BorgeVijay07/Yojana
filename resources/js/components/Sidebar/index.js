import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkr
} from './SidebarElements'
import { useHistory } from 'react-router-dom'

const Sidebar = ({ isOpen, toggle }) => {

    const history = useHistory();

    function logout() {
        localStorage.clear();
        window.location.reload();
        history.push('/');
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {
                        localStorage.getItem('user_info') ?
                            <>
                                <SidebarLinkr to='/dashboard1' onClick={toggle}>
                                    DASHBOARD
                                </SidebarLinkr>
                                <SidebarLink to='hero' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    HOME
                                </SidebarLink>
                                <SidebarLink to='about' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    ABOUT
                                </SidebarLink>
                                <SidebarLink to='services' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-110}>
                                    SERVICES
                                </SidebarLink>
                                <SidebarLink to='schemes' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    SCHEMES
                                </SidebarLink>
                                <SidebarLink to='contact-us' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    CONTACT US
                                </SidebarLink>
                            </>
                            :
                            <>
                                <SidebarLink to='hero' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    HOME
                                </SidebarLink>
                                <SidebarLink to='about' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    ABOUT
                                </SidebarLink>
                                <SidebarLink to='services' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-110}>
                                    SERVICES
                                </SidebarLink>
                                <SidebarLink to='schemes' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    SCHEMES
                                </SidebarLink>
                                <SidebarLink to='contact-us' onClick={toggle}
                                            smooth={true} 
                                            duration={500} 
                                            spy={true} 
                                            exact='true' 
                                            offset={-80}>
                                    CONTACT US
                                </SidebarLink>
                            </>
                    }
                </SidebarMenu>
                <SideBtnWrap>
                    {
                        localStorage.getItem('user_info') ?
                            <>
                                <SidebarRoute onClick={logout}>
                                    LOGOUT
                                </SidebarRoute>
                            </>
                            :
                            <>
                                <SidebarRoute to='/sign-up'>
                                    SIGN UP
                                </SidebarRoute>
                            </>
                    }
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
