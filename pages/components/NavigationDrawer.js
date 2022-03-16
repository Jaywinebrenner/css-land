
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationDrawer = ({
  isHovered,
  drawerOpenAnimationLoaded,
  drawerIsOpening,
  drawerIsClosing,
  handleCloseDrawerViaX,
}) => {
 
  const router = useRouter();
  const handleSettingLink = (e) => {
    //Early return if on a phone
    if(window.innerWidth <= 800) return;

    const clickedLink = e.currentTarget; //Get clicked link through event
    clickedLink.style.color = '#1A1A1A'; //set color via attribute to prevent hover flicker while animating

    //Loop through all menu items and fade out all that weren't clicked
    Array.from(document.querySelectorAll('.nav-drawer__link')).forEach((l, i) => {
      if (!l.isEqualNode(clickedLink)) {
        l.classList.add('hide');
      }
    });
  }

  useEffect(() => {

    //Fire event on route change
    const handleRouteChange = (url, { shallow }) => {
      if(window.innerWidth <= 800) return; //early return for mobile devices

      const referenceLink = document.querySelector('.nav-title-ref');
      const clickedLink = document.querySelector('.nav-drawer__link:not(.hide)');

      if (referenceLink) {
        //Get pixel reference points for making link text overlap
        const refLinkBounds = referenceLink.getBoundingClientRect();
        const refClickedLinkBounds = clickedLink.getBoundingClientRect();

        //Set the default position of the menu item giving it a reference point to animate from
        clickedLink.style.top = `${refClickedLinkBounds.top}px`;
        clickedLink.style.left = `${refClickedLinkBounds.left}px`;
        clickedLink.querySelector('h1').style.fontSize = window.getComputedStyle(referenceLink).fontSize;

        //use requestAnimationFrame to trigger animation between previous CSS properties
        //Could alternatively use setTimeout(() => {}, 1)
        window.requestAnimationFrame(() => {
          clickedLink.style.position = 'absolute';
          clickedLink.style.top = `${refLinkBounds.top}px`;
          clickedLink.style.left = `${refLinkBounds.left}px`;
        })

        //cleanup and resetting
        setTimeout(() => {
          Array.from(document.querySelectorAll('.nav-drawer__link')).forEach((l, i) => {
            l.classList.remove('hide');
            l.style.position = 'static';
            l.style.color = '';
          });
        }, 1000) //cleanup timeout matches the transition length + fade out transition length
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)

  }, []);


  let drawerClasses = ['nav-drawer'];
  let textLinkClasses = 'text-link'
  if (drawerOpenAnimationLoaded) {
    drawerClasses.push('load-drawer-animation')
  }

  if (drawerIsOpening) {
    drawerClasses.push('open')
    textLinkClasses = 'text-link begin-letter-spacing-animation'
  }

  if (drawerIsClosing) {
    drawerClasses.push('close');
    drawerClasses.push('remove-drawer-slide-upon-close');
  }
  if (isHovered) {
    drawerClasses.push('hovered');
  }

  return (
    <div className={drawerClasses.join(' ')}>
      <div onClick={() => handleCloseDrawerViaX()}
        className="nav-drawer__x-wrapper">
        <FontAwesomeIcon className="weather-icon" icon={faXmark} />
      </div>

    </div>
  );
};

export default NavigationDrawer;
