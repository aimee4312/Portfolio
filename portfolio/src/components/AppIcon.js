import React from 'react'
import PropTypes from 'prop-types';

const AppIcon = ({ icon, onClick }) => {
    return (
    <div className='app-icon'>
        <img> src={icon} style={{ width: '50px', height: '50px' }}</img>
    </div>
  )
}

AppIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default AppIcon;
/* 
Attribution Links
Bio: <a href="https://www.flaticon.com/free-icons/avatar" title="avatar icons">Avatar icons created by Freepik - Flaticon</a>
Terminal: <a href="https://www.flaticon.com/free-icons/terminal" title="terminal icons">Terminal icons created by Smashicons - Flaticon</a>
Finder: <a href="https://www.flaticon.com/free-icons/finder" title="finder icons">Finder icons created by Pixel perfect - Flaticon</a>
Resume: <a href="https://www.flaticon.com/free-icons/recruitment" title="recruitment icons">Recruitment icons created by manshagraphics - Flaticon</a>
Linkedin: <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
Github: <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>
*/