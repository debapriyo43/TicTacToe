import { useState } from "react";

export function Player({ playerName, symbol, children,isActive,onChangeName }) {
    const [name, setName] = useState(playerName);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = (e) => {
        setIsEditing(isEditing=> !isEditing);
        onChangeName({symbol,name});
    };
    const handleChange=(e)=>{
        setName(name=>e.target.value);
    }
    return(
        <li className={isActive?"active":undefined}>
            <span className="player">
                {
                    isEditing ? (
                        <input type="text" className="player-name" value={name} required onChange={handleChange}/>
                    ) : (
                        <span className="player-name">{name}</span>
                    )
                }
            <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing ? (
                <button onClick={handleEditClick}>Save</button>
            ) : (
                <button onClick={handleEditClick}>Edit</button>
            )}

          </li>
    );
}