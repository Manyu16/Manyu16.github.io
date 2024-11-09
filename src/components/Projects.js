import '../stylesheets/Projects.css';
import projectPageImage from '../assets/Projects_Page_Image.png';
import {motion} from 'framer-motion';
function ProjectsSection(){
    return (
        <motion.div className = "ProjectsPage" initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity:0, transition:{duration:0.2}}}>
            <div><h1>Projects</h1></div>
            <img src={projectPageImage} alt='Unable to Connect!!'/>
            <div className = "project_1">
                <p id = "project_title">360 Immersive Mapping Application for Verizon</p>
                <p className ="project_body">Built a 360-degree navigation tool for Verizon's office spaces, focusing on backend development with Java and SpringBoot, and improving security with AWS Swcrets integration to protect sensitive data.</p>
            </div>
            <div className = "project_2">
                <p id = "project_title">Radr Application for Verizon</p>
                <p className ="project_body">Developed components of Verizon's sensor mnagement app, writing JUnit test cases for API integrity and working on ReactJS front-end components, enhancing real-time alerts and navigation.</p>
            </div>
            <div className = "project_3">
                <p id = "project_title">Symposium Registration Web App</p>
                <p className = "project_body">Created a registration platform for a college symposium, handling API endpoints and database management. This app enabled students from various universities to easily register and participate.</p>
            </div> 
        </motion.div>
    );
}
export default ProjectsSection;