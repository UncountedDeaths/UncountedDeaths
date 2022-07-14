import React, { useState, useEffect } from 'react';
import { Menu, Drawer } from 'antd';
import styles from '../styles/NavHeader.module.less';
import { useNavigate, useLocation } from 'react-router-dom';
import { InternalRoutes } from '../routes';
import { HamburgerIcon, Logo } from '../assets/assets.index';
import { useScreenWidth } from '../utils';

/**
 * Top level component for rendering the nav bar with logo and menu
 * CSS hides the logo on widths < 800 along with a mobile menu getting rendered at those sizes
 */
export const Header: React.FC = () => {
  const { isMobile } = useScreenWidth();
  return <div className={styles.MenuWrap}>{isMobile ? <RenderMobileMenu /> : <RenderMenu />}</div>;
};

/**
 * Used to render the mobile menu, this is a popover with the regular menu in
 * inline mode instead of horizontal.
 */
const RenderMobileMenu: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <HamburgerIcon className={styles.MobileMenuButton} onClick={() => setVisible(!isVisible)} />
      <Logo className={styles.Logo} />
      <Drawer
        visible={isVisible}
        placement="left"
        onClose={() => {
          setVisible(!isVisible);
        }}
      >
        <div onClick={() => setVisible(false)}>
          <RenderMenu inline />
        </div>
      </Drawer>
    </>
  );
};

interface MenuProps {
  inline?: boolean;
}
/**
 * A FC to render the menu based on the passed parameter
 * @param props The props for this master menu
 */
const RenderMenu: React.FC<MenuProps> = (props: MenuProps) => {
  const { inline } = props;
  const [selected, setSelected] = useState(['1']);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    /**
     * Super ugly bit of code to parse out the current path and update the selected menu item.
     * The only reason this is needed is to update the selected menu item when directly navigating(ie inputting the path directly)
     * A better way would be to parse this our somehow vs this massive if statement because clearly this fails when a new path is added
     * but due to time restrictions this is what we got.
     *
     * Ideally this would also remove the need to updating the state in the Menu.Item as well but it does not -- something to do with the rendering order and when this effect is called.
     */
    if (location.pathname === InternalRoutes.HOME.path) {
      setSelected([`${InternalRoutes.HOME.key}`]);
    } else if (location.pathname === InternalRoutes.RESOURCES.path) {
      setSelected([`${InternalRoutes.RESOURCES.key}`]);
    } else if (location.pathname === InternalRoutes.TEAM.path) {
      setSelected([`${InternalRoutes.TEAM.key}`]);
    } else if (location.pathname === InternalRoutes.PUBLICATIONS.path) {
      setSelected([`${InternalRoutes.PUBLICATIONS.key}`]);
    } else if (location.pathname === InternalRoutes.PARTNERS.path) {
      setSelected([`${InternalRoutes.PARTNERS.key}`]);
    } else if (location.pathname === InternalRoutes.MEDIA.path) {
      setSelected([`${InternalRoutes.MEDIA.key}`]);
    } else if (location.pathname === InternalRoutes.ABOUT.path) {
      setSelected([`${InternalRoutes.ABOUT.key}`]);
    }
  }, [location.pathname]);
  return (
    <>
      <Logo
        className={styles.Logo}
        onClick={() => navigate(InternalRoutes.HOME.path)}
        aria-label="Vital Statistics Integrity Project Logo"
      />
      <Menu
        mode={inline ? 'inline' : 'horizontal'}
        selectedKeys={selected}
        className={styles.MenuBar}
      >
        <Menu.Item
          key={InternalRoutes.HOME.key}
          onClick={() => {
            navigate(InternalRoutes.HOME.path);
            setSelected([`${InternalRoutes.HOME.key}`]);
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key={InternalRoutes.ABOUT.key}
          onClick={() => {
            navigate(InternalRoutes.ABOUT.path);
            setSelected([`${InternalRoutes.ABOUT.key}`]);
          }}
        >
          About
        </Menu.Item>
        <Menu.Item
          key={InternalRoutes.TEAM.key}
          onClick={() => {
            navigate(InternalRoutes.TEAM.path);
            setSelected([`${InternalRoutes.TEAM.key}`]);
          }}
        >
          Team
        </Menu.Item>

        <Menu.Item
          key={InternalRoutes.MEDIA.key}
          onClick={() => {
            navigate(InternalRoutes.MEDIA.path);
            setSelected([`${InternalRoutes.MEDIA.key}`]);
          }}
        >
          Media
        </Menu.Item>
        <Menu.Item
          key={InternalRoutes.PUBLICATIONS.key}
          onClick={() => {
            navigate(InternalRoutes.PUBLICATIONS.path);
            setSelected([`${InternalRoutes.PUBLICATIONS.key}`]);
          }}
        >
          Publications
        </Menu.Item>

        <Menu.Item
          key={InternalRoutes.RESOURCES.key}
          onClick={() => {
            navigate(InternalRoutes.RESOURCES.path);
            setSelected([`${InternalRoutes.RESOURCES.key}`]);
          }}
        >
          FAQs
        </Menu.Item>
      </Menu>
    </>
  );
};
