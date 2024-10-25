import React from "react";
import ReactModal from "react-modal";
import Header from "./Header";
import '../styles/resume.css'

const ResumeModal = ({ isOpen, onRequestClose }) => {
    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="resume-modal" overlayClassName="modal-overlay">
                <Header onRequestClose={onRequestClose} />
                <div className='resume-container'>
                    <embed src="/resume.pdf" width="600px" height="550px" className="resume-embed" />
                </div>
            </ReactModal>
        </div>
    )
}

export default ResumeModal