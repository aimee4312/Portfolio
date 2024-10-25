import React from "react"
import ReactModal from "react-modal"
import Header from './Header';
import '../styles/about.css'

const AboutModal = ({ isOpen, onRequestClose }) => {
    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className={"about-modal"} overlayClassName={"modal-overlay"}>
                <Header onRequestClose={onRequestClose} />
                <div className='aboutme'>
                    <div className='left'>
                        <div className="info-item">
                            <strong>Aimee Mai.png</strong>
                        </div>
                        <hr />
                        <div className="info-item">
                            <span>Software engineer | 23 </span>
                        </div>
                        <hr />
                        <div className="info-item">
                            <strong>Information</strong>
                        </div>
                        <hr />
                        <div className="info-item">
                            Education:
                            <span>BS in Computer Science at Cal Poly SLO</span>
                        </div>
                        <hr />
                        <div className="info-item">
                            Skills:
                            <span>C/C++, Python, React, Node.js</span>
                        </div>
                        <hr />
                        <div className="info-item">
                            Interests:
                            <span>Photography, Travel, Sudoku</span>
                        </div>
                        <hr />
                        <div className="info-item">
                            <strong>About</strong>
                        </div>
                        <div className="info-item">
                            <span>A software engineer with a degree in Computer Science from Cal Poly SLO. My journey in software development has allowed me to explore various programming languages, including C/C++, Python, and JavaScript frameworks like React and Node.js.

                                I’m always eager to learn and grow, whether it’s through professional development or personal interests. I find inspiration in travel, which fuels my curiosity and allows me to connect with diverse cultures and perspectives. Photography and Sudoku are my favorite ways to unwind and challenge my creativity.</span>
                        </div>
                    </div>

                    <div className='divider'></div>
                    <div className='right'>
                        <img src="/images/me.png" className="me" alt='photo of me' />
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default AboutModal