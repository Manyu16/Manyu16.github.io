import '../stylesheets/Skills.css';
import {motion} from 'framer-motion';
import skillSectionImage from '../assets/Skills_Page_Image.png';
function SkillsSection(){
    return (
        <motion.div className = "SkillsPage" initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0, transition:{duration:0.2}}}>
            <h1>Skills</h1>
            <img src = {skillSectionImage} alt = 'Unable to connect'></img>
            <div className = "skill_1">
                <p id = "skill_title">Web Development</p>
                <p className ="skill_body">Proficient in front-end and back-end development with HTML, CSS, JavaScript, ReactJS, Java, and Spring Boot. Experienced in designing APIs, enhancing security, and delivering projects like immersive mapping and blockchain solutions. Known for effective communication, collaboration, and problem-solving</p>
            </div>
            <div className = "skill_2">
                <p id = "skill_title">Database Management</p>
                <p className ="skill_body">Experienced in database design and management, with a focus on optimizing data handling and strengthening security. Skilled in creating and managing API endpoints and leveraging technologies like SQL, MySQL, and AWS Secrets to ensure secure, efficient database operations in large-scale projects​</p>
            </div>
            <div className = "skill_3">
                <p id = "skill_title">User-Centered Design</p>
                <p className = "skill_body">Focused on creating intuitive, user-friendly interfaces using ReactJS and responsive design principles, delivering seamless user experiences. Skilled in front-end development, crafting dynamic, visually appealing components, and enhancing functionality for projects, including immersive mapping applications​</p>
            </div>
        </motion.div>
    );
}
export default SkillsSection;