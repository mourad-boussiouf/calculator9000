import React from 'react';

function BeautifulScreen ({nombre1,operator,nombre2}) {

    return(
        <div className="ecran">
             { nombre1 } { operator } { nombre2 }
        </div>
    )
}

export default BeautifulScreen;