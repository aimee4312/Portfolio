import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import TerminalModal from './TerminalModal'
import AboutModal from './AboutModal'
import ResumeModal from './ResumeModal'
import '../styles/dockbar.css'

export default function DockBar() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className='dockbar'>
      <img src='../images/dock bar/bio.png' className='app-icon' alt='about me' data-tooltip-id="bio-tooltip" onClick={() => openModal('about')}></img>
      <img src='../images/dock bar/resume.png' className='app-icon' alt='resume' data-tooltip-id="resume-tooltip" onClick={() => openModal('resume')}></img>
      <img src='../images/dock bar/linkedin.png' className='app-icon' alt='linked in' data-tooltip-id="linkedin-tooltip" onClick={() => window.open("https://www.linkedin.com/in/iamaimeemai/", "_blank")}></img>
      <img src='../images/dock bar/github.png' className='app-icon' alt='github' data-tooltip-id="github-tooltip" onClick={() => window.open("https://github.com/aimee4312", "_blank")}></img>
      <img src='../images/dock bar/terminal.png' className='app-icon' alt='terminal' style={{ borderRadius: 0 }} data-tooltip-id="terminal-tooltip" onClick={() => openModal('terminal')}></img>

      <Tooltip id="bio-tooltip" content="About Me" className="tooltip" />
      <Tooltip id="resume-tooltip" content="Resume" className="tooltip" />
      <Tooltip id="linkedin-tooltip" content="LinkedIn" className="tooltip" />
      <Tooltip id="github-tooltip" content="GitHub" className="tooltip" />
      <Tooltip id="terminal-tooltip" content="Terminal" className="tooltip" />

      <ResumeModal isOpen={activeModal === 'resume'} onRequestClose={closeModal} />
      <AboutModal isOpen={activeModal === 'about'} onRequestClose={closeModal} />
      <TerminalModal isOpen={activeModal === 'terminal'} onRequestClose={closeModal} />
      

    </div>
  )
}
