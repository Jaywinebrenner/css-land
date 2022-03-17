
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import NavigationDrawer from './NavigationDrawer';

const TopNav = ({props}) => {

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
 
      const handleDrawerClose = () => {
        const htmlElement = document.querySelector('html');
        htmlElement.style.overflow = "Initial";
        setDrawerIsClosing(true);
        setTimeout(() => {setDrawerIsOpening(false);}, 950);
        setTimeout(() => {setDrawerIsClosing(false);}, 1750);
        setIsHovered(false);
      }

    // The following code ensures the class with the animation code isn't added until all the components were loaded, eliminating an animation-swipe bug upon load.
    const loadDrawerAnimation = () => {
      setDrawerOpenAnimationLoaded(true);
    };
    setTimeout(() => {loadDrawerAnimation();}, 350);
  }, []);


  return (
    <div className='top'>
        <div className='top-left'>
        <Link href="/contextLand">
            <h3>EMPTY</h3>
        </Link>
        </div>

        <div onClick={() => toggleModal()} className='top-middle'>
            <h3>MIDDLE</h3>
        </div>
      
        <div onClick={() => handleDrawerOpen()}
             onMouseEnter={() => handleOnMouseEnter()}
             onMouseLeave={() => handleOnMouseLeave()}
             className='top-right'>
        <h3>RIGHT</h3>
        </div>
        <NavigationDrawer
            isHovered={isHovered}
            drawerOpenAnimationLoaded={drawerOpenAnimationLoaded}
            drawerIsOpening={drawerIsOpening}
            drawerIsClosing={drawerIsClosing}
            handleCloseDrawerViaX={handleCloseDrawerViaX}
            props={props}
          />
    </div>


  );
};

  export default TopNav;