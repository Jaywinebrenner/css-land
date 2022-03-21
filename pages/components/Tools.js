
import React, {useEffect, useState} from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TopNav = () => {



  useEffect(() => {

  }, []);


  return (
      <>
        <h4>TOOLS</h4>
        <div className="chevron-tools-icon-wrapper">
        <FontAwesomeIcon className="chevron-tools-icon" icon={faChevronRight} />
        </div>
        <ul>
        <li>
        <li>React-Native</li>
        <li>ReactJS / Redux</li>
        <li>VueJs</li>
        <li>C#</li>
        <li>Umbraco</li>
        <li>ASP.NET</li>
        <li>Razor</li>
        <li>Ruby / Rails</li>
        <li>PHP</li>
        <li>Custom WordPress development</li>
        <li>Javascript / ES6</li>
        <li>JQuery</li>
        <li>AWS</li>
        <li>WordPress</li>
        <li>Firebase</li>
        <li>SQL databases</li>
        <li>CSS / SCSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Git / Github</li>
        <li>Domain Models</li>
        <li>Google Suite</li>
        <li>Microsoft Office 360</li>
        <li>Adobe Premiere</li>
        <li>Adobe After Effects</li>
        <li>Adobe Photoshop</li>
        <li>Final Cut Pro 7 / X</li>
        <li>Reason / Ableton</li>
        <li>Pro Tools</li>
        <li>Figma</li>
        <li>Asana / Slack / Trello / Jira</li>
        </li>
        </ul>
    </>

  );
};

  export default TopNav;