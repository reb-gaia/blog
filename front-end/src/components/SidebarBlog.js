import React from 'react';
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink } from 'carbon-components-react';

const SidebarBlog = props => {
    return (
        <div className="sidebar-blog">
            <SideNav
                isFixedNav
                expanded={true}
                isChildOfHeader={false}
                aria-label="Side navigation">
                <SideNavItems>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>

                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>

                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>

                    <SideNavMenu title="L0 menu" isActive={true}>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>  
                    </SideNavMenu>
                    <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
                    <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
                </SideNavItems>
            </SideNav>
        </div>
    )
}

export default SidebarBlog;