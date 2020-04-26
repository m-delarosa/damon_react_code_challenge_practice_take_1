import React from 'react'
import Card from './Card'

export default function Favorites(props) {

    const characters = props.favorites.map(character => {
        return <Card removeFavorite={props.removeFavorite} character={character} />
    })

    return (
        <section className='favorites'>
            <ul>
                {characters}
            </ul>
        </section >

    )
}