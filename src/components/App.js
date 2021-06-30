//import CSS
import '../assets/App.css';
//import components
import Modal from '../components/Modal'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
//import hooks
import { useState,useEffect } from 'react'

const App=()=> {

  const [movies, setMovies] = useState([]);
  const [modal,setModal] = useState({
    message:"",
    isVisible:false
  });

  const addMovie=(newMovie)=>{

    setMovies([...movies,newMovie])
    //alert(`${newMovie.title} was added successfully!`)
    setModal({
      message:`${newMovie.title} was added successfully!`,
      isVisible:true
    })
  }

  const hideModal=()=>{
    
    setModal({
      message:"",
      isVisible:false
    })
  }

  // Create the clickHandler function and pass it down to the child MovieItem via props
  const deleteMovie = (id)=>{
      
      const newMovies = movies.filter((movie)=>{

          return movie.id != id
      })

      setModal({
        message:`The movie with id ${id} was deleted!`,
        isVisible:true
      })

      //alert(`The movie with id ${id} was deleted!`)
      setMovies(newMovies);
  }
      
  //execute some code right after the component has been loaded
  useEffect(()=>{
      const fakeDB = [
          {
              id:1,
              title:"Bad Boys II",
              description:"One of my favourite moview of all time"
          },
          {
              id:2,
              title:"Avengers: Infinity Wars",
              description:"The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones"
          },
          {
              id:3,
              title:"Star Wars",
              description:"Adventures of space characters from far, far away"
          },
          {
              id:4,
              title:"Lion King",
              description:"As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar."
          }
      ]

      setMovies(fakeDB)
  },[])
      

  return (
    <div className="container">
        <Modal onHide={hideModal} modalState={modal}/>
        <Header />
        <SearchBox />
        <main>
            <AddMovieForm onAddMovie={addMovie}/>
            <MovieList movies={movies} onDeleteMovieApp={deleteMovie}/>
        </main>
        <Footer />

    </div>
  );
}

export default App;
