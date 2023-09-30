import CharacterCards from "../characterCards/CharacterCards";
import "./characters.css"
import Icon from "../../assets/Icon.png";

function Characters() {
    return (
        <div className="characters">
            <div className="charactersIconWrapper">
                <img className="charactersIcon" src={Icon} alt="Monument Comics Logo" />
            </div>

            <h1 className="charactersTitle">THE HEROES OF MONUMENT COMICS</h1>
            <CharacterCards />
        </div>
    )
}

export default Characters;