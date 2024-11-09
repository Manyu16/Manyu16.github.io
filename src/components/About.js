import '../stylesheets/About.css';
import aboutPageImage from '../assets/About_Page_Image.png';
import {motion} from 'framer-motion';
function AboutSection(){
    return (
        <motion.div className="profile-container" initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0, transition:{duration:0.2}}}>
            <h1>About</h1>
            <p className="profile-text">
                I’m a tech professional with a Computer Science background and two years of web development experience at Cognizant.
                Now pursuing an MS in Data Science at NJIT, I combine industry experience with analytics and AI skills. At Cognizant,
                I developed key applications for Verizon, including a real-time sensor management system and a 360-degree office navigation
                tool, strengthening my expertise in web development and user-focused design.
            </p>
            <br/>
            <p className="profile-text">
                My goal is to create dynamic websites that capture and analyze real-time data, offering actionable insights to drive informed 
                decision-making. I aim to turn these insights into valuable business solutions, helping clients leverage data for growth and 
                success. By combining technical expertise with data analytics, I aspire to build platforms that bring meaningful impact.
            </p>
            <div className = "aboutImage">
                <img src={aboutPageImage} alt='Unable to connect!!'/>
            </div>
        </motion.div>
    );
}
export default AboutSection;