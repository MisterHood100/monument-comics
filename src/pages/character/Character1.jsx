import "./character.css";
import CharacterData from "../../components/CharacterData";


const character = CharacterData;
const results = character.filter(data => data.id === 1);

function Character1() {
    return (
        <div className="character">
            {results.map((character) => {
                return (
                    <div key={character.id} className="character">
                        <div className="characterImgs">
                            <img src={character.image1} alt={character.alt1} className="characterImg" />
                            <img src={character.image2} alt={character.alt2} className="characterImg" />
                        </div>
                        <h1 className="characterName">{character.name}</h1>
                        <div className="characterProfile">
                            <div className="characterInfo">
                                <h2 className="characterProfileTitle">HERO PROFILE</h2>
                                <h3 className="characterInfoTitle">Alter-Ego</h3>
                                <ul className="characterInfoList alterEgoList">
                                    <li>{character.alterEgo}</li>
                                </ul>
                                <h3 className="characterInfoTitle">Alias</h3>
                                <ul className="characterInfoList aliasList">
                                    <li>{character.alias1}</li>
                                    <li>{character.alias2}</li>
                                    <li>{character.alias3}</li>
                                </ul>
                                <h3 className="characterInfoTitle">Characteristics</h3>
                                <ul className="characterInfoList characteristicsList">
                                    <li><b>Gender:</b> {character.gender}</li>
                                    <li><b>Height:</b> {character.height}</li>
                                    <li><b>Weight:</b> {character.weight}</li>
                                    <li><b>Age:</b> {character.age}</li>
                                    <li><b>Ethnic / Racial / Cultural / National Identiy:</b> {character.identity}</li>
                                </ul>
                                <h3 className="characterInfoTitle">Status</h3>
                                <ul className="characterInfoList statusList">
                                    <li><b>Hometown:</b> {character.hometown}</li>
                                    <li><b>Occupation:</b> {character.occupation}</li>
                                    <li><b>Alignment:</b> {character.alignment}</li>
                                </ul>
                            </div>
                            <div className="characterBio">
                                <p>{character.bio1}</p>
                                <p><br />{character.bio2}</p>
                                <p><br />{character.bio3}</p>
                                <p><br />{character.bio4}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Character1;