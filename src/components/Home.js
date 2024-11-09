import '../stylesheets/Home.css';
import Modal from 'react-modal';
import React, { useState } from 'react';
import homePageImage from '../assets/Home_Page_3.png';
import {motion} from 'framer-motion';
function HomeSection() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Define the open and close functions
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
  return (
    <motion.div className = "HomePage" initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0, transition:{duration:0.1}}}>
        <img src={homePageImage} alt='Unable to load!!'/>
        <div className="Introduction">
            <p id = "greetings">Hey there, </p>
            <p id = "Myname">I'm<br/>Abhimanyu</p>
            <p id = "JobTitle">- Full Stack Developer</p>
            <p id = "description">A Full Stack Developer skilled in both front-end
                and back-end development, creating complete web applications
                from UI design to server and database management. Proficient in various tools and
                frameworks to deliver seamless, efficient solutions.
            </p>
            <p id = "stats">2<span id="plus"> +</span></p>
            <p id="statsInfo">Years of Experience</p>
            <p id = "stats">10<span id="plus"> +</span></p>
            <p id="statsInfo">Completed Projects</p>
            <p id = "stats">50<span id="plus"> +</span></p>
            <p id="statsInfo">Customers Satisfied</p>
        </div>
        <div>
            <button type = "submit" onClick={openModal} className="contact-button">Get in touch</button>

                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal} 
                    contentLabel="Contact Details"
                    className="modal-content"
                    overlayClassName="modal-overlay">
                    <h2>Contact Details</h2>
                    <p>Email: Manyu.m216@gmail.com</p>
                    <p>Phone: +1 (973)517-9896</p>
                    <p>LinkedIn: linkedin.com/in/abhimanyu16/</p>
                    <button onClick={closeModal} className="close-button">Close</button>
                </Modal>
        </div>
    </motion.div>
    
  );
}

export default HomeSection;
