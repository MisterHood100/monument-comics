import "./mission.css"
import Logo from "../../../assets/Logo-2.png"

function Mission() {
    return (
        <div className="mission">
            <div className="missionImgWrapper">
                <img className="missionImg" src={Logo} alt="Monument Comics Logo"></img>
            </div>
            <div className="missionContent">
                <div className="missionWho">
                    <h1 className="missionTitle missionWhoTitle">WHO WE ARE</h1>
                    <p className="missionText missionWhoText">We are Monument Comics, an independent comic book publisher based in Pasadena, California.</p>
                </div>
                <div className="missionWhat">
                    <h1 className="missionTitle missionWhatTitle">WHAT WE DO</h1>
                    <p className="missionText missionWhatText"> We create, publish and produce classic and innovative stories about original, dynamic and monumental heroes.</p>
                </div>
                <div className="missionWhy">
                    <h1 className="missionTitle missionWhyTitle">WHY WE DO IT</h1>
                    <p className="missionText missionWhyText">We do it because, like generations past, present and future, we were raised on comic books and all comic media -- Animation and Live Action -- and were inspired to tell our own stories. Here at Monument Comics, we believe that we have entertaining and nuanced stories that cannot be told by anyone else about heroes that you cannot find anywhere else.</p>
                </div>
            </div>
        </div>
    )
}

export default Mission;