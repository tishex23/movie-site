import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";




function Genre() {

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(37);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const getGenres = async() => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=db5079a3779189dc15eb5636dc6d3fac');
        const data = await response.json();
        return data;
      } catch(error) {
        console.error('Error Fetching Data', error);
      } 
    }
    getGenres().then(data => setGenres(data.genres));

  },[]);

  useEffect(() => {
    const getMovies = async() => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=db5079a3779189dc15eb5636dc6d3fac&with_genres=${currentGenre}&page=${currentPage}`);
        const data = await response.json();
        return data;
      } catch(error) {
        console.error('Error Fetching Data', error);
      } 
    }
    getMovies().then(data => setMovies(data.results));

  },[currentGenre, currentPage]);

  const genreChanger = (page) => {
    setCurrentGenre(page);
  }

  function increase () {
    setCurrentPage(prev => prev + 1);
  }

  function decrease () {
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage(prev => prev - 1);
  }

  
  return (
    <div>
      <ul className="mx-6 flex flex-wrap justify-center border-2 border-yellow-300 rounded-md bg-slate-400" >
        {genres.map((data) => (<li 
        onClick={() => genreChanger(data.id)} 
        className=" hover:text-yellow-300 hover:bg-black rounded-lg cursor-pointer p-1 m-4" 
        key={data.id}>
          {data.name}
        </li>))}
      </ul>

      <div className="m-28 flex flex-wrap justify-start gap-2">
        {movies.map(movie => <Link key={movie.id} to={`movie/${movie.id}`}> <Card title={movie.original_title} source={movie.poster_path} id={movie.id}  /> </Link> )}
      </div>
      <div className="m-28 flex justify-center gap-2">
        <div className="w-14 h-8 flex items-center justify-center bg-red-500 rounded-lg  cursor-pointer" onClick={decrease}> 
          <FontAwesomeIcon icon={faCircleChevronLeft} className="text-white" />
        </div>
        <div className="flex items-center justify-center bg-white rounded-full w-8">
          <div>{currentPage}</div>
        </div>
        <div className="w-14 h-8 flex items-center justify-center bg-red-500 rounded-lg cursor-pointer" onClick={increase}>
           <FontAwesomeIcon icon={faCircleChevronRight} className="text-white" /> 
        </div>
      </div>
    </div>
    
  )
}

export default Genre

