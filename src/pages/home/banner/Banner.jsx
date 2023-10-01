import "./banner.css";
import King from "../../../assets/King.jpg";
import Solfire from "../../../assets/Solfire.jpg";
import Reflex from "../../../assets/ReFlex.jpg";

function Banner() {
    return (
        <div className="banner">
            <img className="bannerImg" src={King} alt="KING" />
            <img className="bannerImg" src={Solfire} alt="SOLFIRE" />
            <img className="bannerImg" src={Reflex} alt="REFLEX" />
        </div>
    )
}

export default Banner;