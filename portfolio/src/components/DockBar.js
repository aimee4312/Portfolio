import React from 'react'
import { Tooltip } from 'react-tooltip'
import '../styles/dockbar.css'

export default function DockBar() {
  return (
    <div className='dockbar'>
      <img src='../images/dock bar/finder.png' className='app-icon' alt='finder' data-tooltip-id="finder-tooltip"></img>
      <img src='../images/dock bar/bio.png' className='app-icon' alt='about me' data-tooltip-id="bio-tooltip"></img>
      <img src='../images/dock bar/resume.png' className='app-icon' alt='resume' data-tooltip-id="resume-tooltip"></img>
      <img src='../images/dock bar/linkedin.png' className='app-icon' alt='linked in' data-tooltip-id="linkedin-tooltip"></img>
      <img src='../images/dock bar/github.png' className='app-icon' alt='github' data-tooltip-id="github-tooltip"></img>
      <img src='../images/dock bar/terminal.png' className='app-icon' alt='terminal' style={{ borderRadius: 0 }} data-tooltip-id="terminal-tooltip"></img>
      
      <Tooltip id="finder-tooltip" content="Finder" className="tooltip" />
      <Tooltip id="bio-tooltip" content="About Me" className="tooltip" />
      <Tooltip id="resume-tooltip" content="Resume" className="tooltip" />
      <Tooltip id="linkedin-tooltip" content="LinkedIn" className="tooltip" />
      <Tooltip id="github-tooltip" content="GitHub" className="tooltip" />
      <Tooltip id="terminal-tooltip" content="Terminal" className="tooltip" />
    </div>
  )
}
