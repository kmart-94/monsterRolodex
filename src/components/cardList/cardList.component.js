import React from 'react';
import './cardList.styles.css';
import Card from '../card/card.component.js'

export const CardList = ({monsters}) => {
    return(
        <div className='cardList'>
            {monsters.map(monster => <Card monster={monster} key={monster.id} />)}
        </div>);
}