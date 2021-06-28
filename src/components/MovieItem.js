// *****CHILD*****

//import icons
import { FaWindowClose } from "react-icons/fa";

const MovieItem = (props) => {
    return (
        <div class="movie-container">
            <div class="grid grid-col-2 movie-top-area">
                <p class="">
                    {props.title}
                </p>
                <FaWindowClose className="icon-cursor icon-size-dbl-xlg grid-x-right"/>
            </div>

            <p class="movie-description">
                {props.description}
            </p>
        </div>
    )
}

MovieItem.defaultProps = {
    title:"Enter movie title",
    description:"Enter movie description"
}

export default MovieItem
