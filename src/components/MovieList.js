// *****PARENT*****
import MovieItem from '../components/MovieItem'
//import hooks
import { useState,useEffect } from 'react'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
        
        //execute some code right after the component has been loaded
        useEffect(()=>{
            const fakeDB = [
                {
                    title:"Bad Boys II",
                    description:"One of my favourite moview of all time"
                },
                {
                    title:"Avengers: Infinity Wars",
                    description:"The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones"
                },
                {
                    title:"Star Wars",
                    description:"Adventures of space characters from far, far away"
                },
                {
                    title:"Lion King",
                    description:"As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar."
                }
            ]

            setMovies(fakeDB)
        },[])
        

    return (
        <section className="movie-list-continer">
            {/* map each movie object to a move item */}
           {movies.map((movie)=>(
               <MovieItem title={movie.title} description={movie.description}/>
           ))}
        </section>
    )
}

export default MovieList
