import { useState } from 'react';

export default function ({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(true);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    return (
        <li>
            <span className='player'> 
              {isEditing ? 
                <span className='player-playerName'>
                    {playerName}
                </span>
                :
                <input type='text' value={playerName} onChange={handleChange} required></input>
              }
              <span className='player-symbol'>
                {symbol}
              </span>
            </span>
            <button onClick={handleEditClick}>{ isEditing ? 'Edit' : 'Save' }</button>
        </li>
    );
}