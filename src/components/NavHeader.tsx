import React, { useState, useEffect } from 'react';
import { Menu, Popover, Button } from 'antd';
import styles from '../styles/NavHeader.module.less';
import { useNavigate, useLocation } from 'react-router-dom';
import { InternalRoutes } from '../routes';
import { useThrottle } from '@react-hook/throttle';
import { Logo } from '../assets/assets.index';

/**
 * Top level component for rendering the nav bar with logo and menu
 * CSS hides the logo on widths < 800 along with a mobile menu getting rendered at those sizes
 */
export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { width } = useViewport();
  const breakpoint = 800;
  return (
    <div className={styles.MenuWrap}>
      <Logo
        className={styles.Logo}
        onClick={() => navigate(InternalRoutes.HOME.path)}
        aria-label="CEID Logo"
      />

      {width <= breakpoint ? (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <RenderMobileMenu />
        </div>
      ) : (
        <RenderMenu />
      )}
    </div>
  );
};

/**
 * Used to render the mobile menu, this is a popover with the regular menu in
 * inline mode instead of horizontal.
 */
const RenderMobileMenu: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Popover
      content={
        <div onClick={() => setVisible(false)}>
          <RenderMenu inline />
        </div>
      }
      visible={isVisible}
      trigger="click"
    >
      <Button type="primary" onClick={() => setVisible(!isVisible)}>
        Menu
      </Button>
    </Popover>
  );
};
/**
 * A simple hook to watch the viewport size so that we can render a different menu
 * based on the screen size. We use a throttled hook to keep the browser from over-rendering
 */
const useViewport = () => {
  const [width, setWidth] = useThrottle(window.innerWidth, 10);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setWidth]);

  // Return the width so we can use it in our components
  return { width };
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
    }
  }, [location.pathname]);
  return (
    <Menu
      mode={inline ? 'inline' : 'horizontal'}
      selectedKeys={selected}
      className={
        location.pathname == InternalRoutes.HOME.path ? styles.MenuBar : styles.MenuBarBlack
      }
    >
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
        key={InternalRoutes.MEDIA.key}
        onClick={() => {
          navigate(InternalRoutes.MEDIA.path);
          setSelected([`${InternalRoutes.MEDIA.key}`]);
        }}
      >
        Media
      </Menu.Item>
      <Menu.Item
        key={InternalRoutes.TEAM.key}
        onClick={() => {
          navigate(InternalRoutes.TEAM.path);
          setSelected([`${InternalRoutes.TEAM.key}`]);
        }}
      >
        Our Team
      </Menu.Item>
      <Menu.Item
        key={InternalRoutes.RESOURCES.key}
        onClick={() => {
          navigate(InternalRoutes.RESOURCES.path);
          setSelected([`${InternalRoutes.RESOURCES.key}`]);
        }}
      >
        Resources
      </Menu.Item>
    </Menu>
  );
};
