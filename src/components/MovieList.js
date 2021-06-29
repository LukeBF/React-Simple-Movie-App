// *****PARENT*****
import MovieItem from '../components/MovieItem'


const MovieList = (props) => {

    

    return (
        <section className="movie-list-continer">
            {/* map each movie object to a move item */}
           {props.movies.map((movie)=>(
               <MovieItem key={movie.id} id={movie.id} onDeleteMovie={props.onDelete} title={movie.title} description={movie.description}/>
           ))}
        </section>
    )
}

export default MovieList
