import CharacterCards from "./characterCards/CharacterCards";
import "./characters.css"
import { CharacterData } from "../../components/CharacterData";

function Characters() {
    return (
        <div className="characters">
            <h1 className="charactersTitle">THE HEROES OF MONUMENT COMICS</h1>
            <CharacterCards data={CharacterData} />
        </div>
    )
}

export default Characters;