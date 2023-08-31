import "./about.css"
import Mission from "./mission/Mission";
import Staff from "./staff/Staff";

function About() {
    return (
        <div className="about">
            <Mission />
            <Staff />
        </div>
    )
}

export default About;