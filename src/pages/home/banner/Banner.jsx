import "./banner.css";
import King from "../../../assets/Hero-1.jpg";
import Solfire from "../../../assets/Hero-2.jpg";
import Reflex from "../../../assets/Hero-3.jpg";

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