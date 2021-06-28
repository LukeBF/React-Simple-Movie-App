
import '../assets/App.css';
import Modal from '../components/Modal'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const App=()=> {
  return (
    <div className="container">
        <Modal />
        <Header />
        <SearchBox />
        <main>
            <AddMovieForm />
            <MovieList />
        </main>
        <Footer />

    </div>
  );
}

export default App;
