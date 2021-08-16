import React, { MouseEvent } from 'react';

/* place holder, here include future menu to add to all pages*/
const startButton = () => {
    const refreshtimer = () => {
        window.location.reload();
    };

    return(
    <button className="bg-ldthistle hover:bg-dthistle font-bolf py-1 px-3 rounded-full" onClick={refreshtimer}>Restart</button>)
};

export default startButton;

// button text and onclick , pass as props