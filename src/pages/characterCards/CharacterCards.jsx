import "./characterCards.css";
import { NavLink } from "react-router-dom";
import CharacterCardData from "../../components/CharacterCardData";

let cardData = CharacterCardData;
let results1 = cardData.filter(data => data.id === 1)
let results2 = cardData.filter(data => data.id === 2)
let results3 = cardData.filter(data => data.id === 3)

function CharacterCards() {
    return (
        <div className="characterCards">
            {results1.map((cardData) => {
                return (
                    <div key={cardData.id} className="characterCard">
                        <NavLink to={"/character_1"}><img src={cardData.img} alt={cardData.alt} className="characterCardImg" /></NavLink>
                        <h1 className="characterCardName">{cardData.name}</h1>
                    </div>
                )
            })}
            {results2.map((cardData) => {
                return (
                    <div key={cardData.id} className="characterCard">
                    <NavLink to={"/character_2"}><img src={cardData.img} alt={cardData.alt} className="characterCardImg" /></NavLink>
                        <h1 className="characterCardName">{cardData.name}</h1>
                    </div>
                )
            })}
            {results3.map((cardData) => {
                return (
                    <div key={cardData.id} className="characterCard">
                    <NavLink to={"/character_3"}><img src={cardData.img} alt={cardData.alt} className="characterCardImg" /></NavLink>
                        <h1 className="characterCardName">{cardData.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterCards;