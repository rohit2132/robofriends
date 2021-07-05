import React from 'react';
const Card = (props) => {
    return (
        
        <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?100x100`} />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;