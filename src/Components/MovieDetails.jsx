import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";



export default function MovieDetails() {

  const { id, detail } = useParams();

  const [mvData, setMvData] = useState({});
  const [cast, setCast] = useState([]);
  const [genre, setGenre] = useState([]);
  

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/${detail}/${id}?api_key=db5079a3779189dc15eb5636dc6d3fac&append_to_response=credits`);
        const data = await response.json();
        return data;

      } catch(error){
        console.error('Error fetching Data ', error);
      }
    } 
    getData().then((data) => {
      setMvData(data); 
      setCast(data.credits.cast);
      setGenre(data.genres);
    });


  },[id])


  return (
    <div className="flex justify-center" >
            <div className="w-3/5 rounded-sm grid gap-2 hover:shadow-lg cursor-pointer ">
                {mvData && mvData.backdrop_path && 
                (<div className="relative">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500/${mvData.backdrop_path}`} 
                    alt="sample img" 
                    className="w-full rounded-md "                     
                    />
                    <FontAwesomeIcon icon={faPlay} className="text-blue-500 absolute top-1/2 transform -translate-y-1/2 right-1/2 translate-x-1/2 text-5xl" />
                </div>
                )}
                <div className="flex gap-2">
                  {mvData && mvData.poster_path && 
                  (<img 
                    src={`https://image.tmdb.org/t/p/w500/${mvData.poster_path}`}  
                    alt="sample img" 
                    className="object-fill w-1/5 rounded-md hidden lg:block" 
                  />)
                  }
                  <div 
                  className="w-full bg-orange-200 rounded-md">
                    <div className="flex items-center justify-center xl:justify-start xl:m-4 xl:text-lg">
                      <h1 className="font-bold">{mvData.original_title || mvData.original_name}</h1>
                    </div>
                    <ul className="grid ml-4 xl: gap-3" >
                      <li> <span className="font-bold">Genres: </span>{genre.map(genre => genre.name).join(", ")}</li>
                      <li> <span className="font-bold">Duration: </span> {mvData.runtime || ""} min</li>
                      <li> <span className="font-bold">Budget: </span> {mvData.budget || ""}</li>
                      <li> <span className="font-bold">Vote Average: </span> {mvData.vote_average}</li>
                      <li> <span className="font-bold">Release Date: </span> {mvData.release_date}</li>
                      <li> <span className="font-bold">Actors: </span> {cast.slice(0, 10).map(actor => actor.name).join(", ")}</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t-4 border-b-4">
                  <h1 className="text-white">Description...</h1>
                  <p className="text-gray-900 bg-orange-200 rounded-md">{mvData.overview}</p>
                </div>
            </div>

    </div>
    
  )
}
