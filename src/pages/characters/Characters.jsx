import CharacterCards from "../characterCards/CharacterCards";
import "./characters.css"

function Characters() {
    return (
        <div className="characters">
            <h1 className="charactersTitle">THE HEROES OF MONUMENT COMICS</h1>
            <CharacterCards />
        </div>
    )
}

export default Characters;