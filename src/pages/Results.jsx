import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";


function Results() {

  // fetch searchTerm value from Layouts.jsx
  const { results } = useParams(); 

  const [searchings, setSearchings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);

  const url = `https://api.themoviedb.org/3/search/multi?api_key=db5079a3779189dc15eb5636dc6d3fac&query=${results}&page=${currentPage}`


  useEffect(() => {
    setCurrentPage(1);
    console.log("secodstate");
  }, [results]);

  

  // fetch search results data and set to searchings state
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch(error){
        console.error("Error fetching data", error);
      }
    }
    getData().then((data) => {
      setSearchings(data.results);
      setPageLimit(data.total_pages)
    });
    console.log("first useEfect")

  },[results, currentPage])

 

  
  function increase () {
    currentPage === pageLimit ? setCurrentPage(pageLimit) : setCurrentPage(prev => prev + 1);
  }

  function decrease () {
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage(prev => prev - 1);
  }


  return (
    <div> 
      <div className="m-28 flex flex-wrap justify-start gap-2">
        {searchings.map(movie => <Link key={movie.id} to={`${movie.original_title === undefined ? 'tv' : 'movie'}/${movie.id}`}> <Card title={movie.original_name || movie.original_title} source={movie.poster_path} id={movie.id}  /> </Link>)}
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

export default Results