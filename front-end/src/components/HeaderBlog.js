import React from 'react';
import { HeaderContainer, Header, SkipToContent, HeaderMenuButton, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderMenu, SideNav, SideNavItems, HeaderSideNavItems } from 'carbon-components-react';

const HeaderBlog = props => {
    return (
		<div className="header-blog">
			<HeaderContainer
				render={({ isSideNavExpanded, onClickSideNavExpand }) => (
					<Header aria-label="IBM Platform Name">
						<SkipToContent />
						<HeaderMenuButton
							aria-label="Open menu"
							onClick={onClickSideNavExpand}
							isActive={isSideNavExpanded}
						/>
						<HeaderName href="#" prefix="Blog">[Rebeca]</HeaderName>

						<HeaderNavigation aria-label="IBM Platform">
							<HeaderMenuItem isCurrentPage href="#">Link 1</HeaderMenuItem>
							<HeaderMenuItem href="#">Link 2</HeaderMenuItem>
							<HeaderMenuItem href="#">Link 3</HeaderMenuItem>
							<HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
								<HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
								<HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
								<HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
							</HeaderMenu>
						</HeaderNavigation>
						<SideNav
							aria-label="Side navigation"
							expanded={isSideNavExpanded}
							isPersistent={false}>
							<SideNavItems>
								<HeaderSideNavItems>
									<HeaderMenuItem href="#">Link 1</HeaderMenuItem>
									<HeaderMenuItem href="#">Link 2</HeaderMenuItem>
									<HeaderMenuItem href="#">Link 3</HeaderMenuItem>

									<HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
										<HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
										<HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
										<HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
									</HeaderMenu>
								
								</HeaderSideNavItems>
							</SideNavItems>
						</SideNav>
					</Header>
				)}
			/>
		</div>
	);
}
        
export default HeaderBlog;