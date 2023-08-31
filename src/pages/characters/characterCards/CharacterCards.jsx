import "./characterCards.css"
import { NavLink } from "react-router-dom"

const CharacterCards = ({ data }) => {
    return (
        <div className="characterCards">
            {data.map((character, id) => {
                return (
                    <div key={id} className="characterCard">
                        <NavLink to="/characters/character"><img src={character.image1} alt={character.alt1} className="characterCardImg" /></NavLink>
                        <h1 className="characterCardName">{character.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterCards;