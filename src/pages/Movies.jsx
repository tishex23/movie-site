import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Tv() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=db5079a3779189dc15eb5636dc6d3fac&page=${currentPage}`);
        const data = await response.json();
        return data;
      } catch(error) {
        console.error('Error Fetching Data', error);
      }
    } 
    getData().then(data => setData(data.results));
  },[currentPage])

  
  function increase () {
    setCurrentPage(prev => prev + 1);
  }

  function decrease () {
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage(prev => prev - 1);
  }


  return (
    <div>
      <div className="m-28 flex flex-wrap justify-start gap-2">
        {data.map(movie => <Link key={movie.id} to={`movie/${movie.id}`}> <Card title={movie.original_title} source={movie.poster_path} id={movie.id}  /> </Link>)}
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
