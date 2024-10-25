import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Header from './Header';
import '../styles/terminal.css'


const TerminalModal = ({ isOpen, onRequestClose }) => {
    const terminalPrefix = 'aimeemai@portfolio %  ';
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    

    const cmds = {
        help: "Available commands: help, about, projects, credits, funfacts, clear, exit",
        about: "I’m a recent software engineering grad from Cal Poly SLO. Outside of tech, I enjoy photography and exploring new places, always looking for inspiration in everyday moments.",
        projects: [
            "Type in the name of the project for more details: ",
            "Doozy",
            "SLOCALS",
            "Smiski World"
            ],
        credits:[
            "1. Avatar icons created by Freepik - Flaticon: https://www.flaticon.com/free-icons/avatar",
            "2. Terminal icons created by Smashicons - Flaticon: https://www.flaticon.com/free-icons/terminal",
            "3. Recruitment icons created by manshagraphics - Flaticon: https://www.flaticon.com/free-icons/recruitment",
            "4. Linkedin icons created by riajulislam - Flaticon: https://www.flaticon.com/free-icons/linkedin",
            "5. Github icons created by riajulislam - Flaticon: https://www.flaticon.com/free-icons/github",
            "6. Logo created by imaginationlol - Flaticon: https://www.flaticon.com/free-icons/red-envelope"
            ],
        funfacts: [
            "This is the exact theme of my terminal.",
            "I'm slightly allergic to grapes, but I eat them all the time...",
            "I've been a barista since I was 15 :)",
            "My favorite games are Sudoku and TFT.",
            "My go to coffee drink is a cortado.",

        ],
        clear: "",
        doozy: [
            "Doozy",
            "Doozy is a mobile productivity app designed to help users manage their tasks and stay organized. It provides features like user authentication, activity tracking, and a timeline display for seamless user experience.",
            "Tech Stack",
            "Frontend: React Native",
            "Backend: Firebase",
            "Database: Firebase Firestore",
            "Authentication: Firebase Authentication",
            "Contributions",
            "Developed and implemented user management features, including user authentication and profile settings.",
            "Designed and set up the Firebase database structure to support dynamic data management.",
            "Created user interfaces for profiles and timelines, ensuring a smooth and organized presentation of activities.",
        ],
        slocals: [
            "SLOCALS",
            "SLOCALS is a community-driven platform that connects locals and visitors, offering a range of services and activities to enhance the experience of exploring a new city. The app allows users to discover local events, book experiences, and interact with other community members.",
            "Tech Stack",
            "Frontend: Vue.js",
            "Backend: Node.js with Express",
            "Database: MongoDB",
            "Authentication: JSON Web Tokens (JWT)",
            "Contributions",
            "Assisted in developing the frontend using React, creating responsive and user-friendly interfaces.",
            "Contributed to building the backend with Node.js and Express, implementing RESTful APIs for data handling.",
        ],
        smiskiworld: [
            "Smiski World",
            "Smiski World is a single page application designed for collecting and trading Smiski characters. Users can keep track of their collections, engage in trading with other users, and participate in a chat forum to share tips, experiences, and connect with fellow enthusiasts.",
            "Tech Stack",
            "Frontend: Lit",
            "Backend: Node.js with Express",
            "Database: MongoDB",
            "Contributions",
            "Developed the frontend using Lit, creating an intuitive user interface for managing collections and trading activities.",
            "Assisted in setting up the backend with Node.js and Express, implementing RESTful APIs for efficient data management.",
            "Integrated MongoDB for data storage, enabling users to track their collections and trade interactions seamlessly.",
            "Developed a chat forum feature to enhance user interaction and community engagement within the app.",
        ],
        exit: "Goodbye!",
    }

    useEffect(() => {
        if (isOpen) {
            const introMessage = [
                `${terminalPrefix}Welcome to the terminal!`,
                `${terminalPrefix}Commands: help, about, projects, credits, funfacts, clear, exit`,
            ];
            setOutput(introMessage);
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase().replace(/\s+/g, '');
        if (cmd === 'exit') {
            handleCloseModal();
            return;
        }

        let response;

        if (cmd === 'credits' || cmd === 'projects' || cmd === 'doozy' || cmd === 'slocals' || cmd === 'smiskiworld') {
            response = cmds[cmd].map((line, index) => <div key={index}>{line}</div>);
        } else if (cmd === 'funfacts') {
            response = getRandomFunFact();
        } else if (cmd === 'clear') {
            setOutput([]);
            setInput('');
            return;
        } else {
            response = cmds[cmd] || 'aimee: Command not found. Type "help" for a list of commands.';
        }
        
        setOutput((prevOutput) => [
            <div key={`resp-${prevOutput.length}`}>{response}</div>,
            <div key={`cmd-${prevOutput.length}`}>{`${terminalPrefix}${cmd}`}</div>,
            ...prevOutput 
        ]);
        setInput('');
    };
    
    const handleCloseModal = () => {
        setOutput([]);
        onRequestClose();
    };

    const getRandomFunFact = () => {
        const facts = cmds.funfacts;
        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    };

    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} className="terminal-modal" overlayClassName="modal-overlay">
                <Header onRequestClose={handleCloseModal} />
                <div className='terminal'>
                    <div className='output'>
                        {output.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className='input-form'>
                        <span>{terminalPrefix}</span>
                        <input type='text' className='input-box' value={input} onChange={handleInputChange}>
                        </input>
                    </form>
                </div>
            </ReactModal>
        </div>
    )
}

export default TerminalModal