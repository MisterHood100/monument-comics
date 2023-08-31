import "./staff.css"
import Founder from "../../../assets/Founder.jpg"

function Staff() {
    return (
        <div className="staff">
            <div className="staffContent">
                <h1 className="staffIntro">MEET THE TEAM</h1>
                <div className="staffMembers">
                    <div className="staffMember staffMemberFounder">
                        <img src={Founder} alt="Branden Hood" className="staffMemberPic" />
                        <h2 className="staffMemberName">Branden Hood</h2>
                        <h3 className="staffMemberTitle"><i>Founder & Creator</i></h3>
                        <p className="staffMemberInfo">Branden Hood, also known as <i><q>Mister Monument</q></i>, is the founder of Monument Comics and the Writer and Creator of titles <i>KING</i>, <i>Solfire</i> & <i>ReFlex</i>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff;