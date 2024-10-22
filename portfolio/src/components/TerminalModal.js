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
        about: "hi",
        projects: "none rn lol",
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
        const cmd = input.trim().toLowerCase();
        if (cmd === 'exit') {
            handleCloseModal();
            return;
        }

        let response;

        if (cmd === 'credits') {
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