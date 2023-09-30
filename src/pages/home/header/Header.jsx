import "./header.css";
import Logo from "../../../assets/Logo-1.png";

function Header() {
    return (
        <div className="header">
            <div className="headerImgWrapper">
                <img className="headerImg" src={Logo} alt="Monument Comics Logo"></img>
            </div>
            <div className="headerContent">
                <span className="headerTitle">BE MONUMENTAL</span>
                <span className="headerIntro">Welcome to <strong>Monument Comics World</strong>, the official website for everything Monument Comics. Stay up to date on the latest news, comics and merchandise.</span>
                <p className="headerMission">The World of Monument Comics is a marvelous world populated with prestigious, one of a kind heroes with unique backgrounds, powers, villains and stories that are sure to create a new comic book experience unlike anything before.  But the World of Monument isn’t just defined by its heroes and villains.  Just as important are the inventive lore and mythologies that give reason to their existence.</p>
            </div>
        </div>
    )
}

export default Header;