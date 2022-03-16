import React, { useState, useEffect } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { useRouter } from 'next/router'

const Navigation = () => {

  const router = useRouter();

  const [drawerIsOpening, setDrawerIsOpening] = useState(false);
  const [drawerIsClosing, setDrawerIsClosing] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [drawerOpenAnimationLoaded, setDrawerOpenAnimationLoaded] = useState(false);

  const handleDrawerOpen = () => {
    const htmlElement = document.querySelector('html');
    htmlElement.style.overflow = "hidden";
    setDrawerIsOpening(true);
    setIsHovered(false);
  }

  const handleCloseDrawerViaX = () => {
    const htmlElement = document.querySelector('html');
    htmlElement.style.overflow = "Initial";
    setDrawerIsOpening(false);
    setIsHovered(false);
  }


  const handleOnMouseEnter = () => {
    setIsHovered(true);
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const handleDrawerClose = () => {
        const htmlElement = document.querySelector('html');
        htmlElement.style.overflow = "Initial";
        setDrawerIsClosing(true);
        setTimeout(() => {setDrawerIsOpening(false);}, 950);
        setTimeout(() => {setDrawerIsClosing(false);}, 1750);
        setIsHovered(false);
      }
      handleDrawerClose();
    }
    router.events.on('routeChangeComplete', handleRouteChange);

    // The following code ensures the class with the animation code isn't added until all the components were loaded, eliminating an animation-swipe bug upon load.
    const loadDrawerAnimation = () => {
      setDrawerOpenAnimationLoaded(true);
    };
    setTimeout(() => {loadDrawerAnimation();}, 350);
  }, []);

  return (
    <>
    <div className="nav">
        <div
        className="nav__logo-wrapper"
        onClick={() => handleDrawerOpen()}
        onMouseEnter={() => handleOnMouseEnter()}
        onMouseLeave={() => handleOnMouseLeave()}
        >
          <p className="major">Hello</p>
          <p className="major">Cheshire</p>
        </div>
          <NavigationDrawer
            isHovered={isHovered}
            drawerOpenAnimationLoaded={drawerOpenAnimationLoaded}
            drawerIsOpening={drawerIsOpening}
            drawerIsClosing={drawerIsClosing}
            handleCloseDrawerViaX={handleCloseDrawerViaX}
          />
    </div>
    </>
  );
};

export default Navigation;
