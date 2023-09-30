import "./characterCards.css";
import { NavLink } from "react-router-dom";
import CharacterCardData from "../../components/CharacterCardData";

const cardData = CharacterCardData;

function CharacterCards() {
    return (
        <div className="characterCards">
            {cardData.map((cardData) => {
                return (
                    <div key={cardData.id} className="characterCard">
                        <img src={cardData.img} alt={cardData.alt} className="characterCardImg" />
                        <h1 className="characterCardName">{cardData.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterCards;