import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import {useEffect } from 'react'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'

function Romance({ movieList, setMovieList }) {
    
   const filteredByGenre = movieList.filter(film => {    
    const data= film.genre === "Romance"
    return data
    }
    )

    return (
        <>
    
            <div style={{ paddingTop: "2rem" }}>
                <h1 style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>ROMANCE</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button>Edit</button>} deleteBtn={<button>Delete</button>} idNo={index} filteredByGenre={filteredByGenre}/>
                    ))}
                </div>

            }

        </>
    )
}

export default Romance;