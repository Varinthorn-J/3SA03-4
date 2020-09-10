import React from 'react';
export default function WordCard(props){
    const activationHandler = c => { console.log(`${c} has been activated.`) }
    return (
        <div>
       <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
        </div>
        );
    }       