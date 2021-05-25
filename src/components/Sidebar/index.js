import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="blog" onClick={toggle}>BLOG</SidebarLink>
                    <SidebarLink to="popular" onClick={toggle}>POPULAR</SidebarLink>
                    <SidebarLink to="archive" onClick={toggle}>ARCHIVE</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
