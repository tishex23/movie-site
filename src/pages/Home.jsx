import Card from "../Components/Card"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function Home() {

  const [data1, setData1] = useState([]); // popular movies data
  const [data2, setData2] = useState([]); // upcoming movies data
  const [data3, setdata3] = useState([]); // Tv Shows data

  //fetch popular movie api and set to data1
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=db5079a3779189dc15eb5636dc6d3fac');
        const data = await response.json();
        return data;
      } catch(error) {
        console.error('Error fetching data', error);
      }
    }
    getTodos().then(data => setData1(data.results));
  },[]) 

  // fetch upcoming movie api and set to data2
  useEffect(() => {
    const getTodos2 = async () => {
      try {
        const response2 = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=db5079a3779189dc15eb5636dc6d3fac');
        const data2 = await response2.json();
        return data2;
      } catch(error){
        console.error('Error fetching data', error);
      }
    }
    getTodos2().then(data => setData2(data.results));
  },[])

  

  //fetch Popular Tvs api and set to data3
  useEffect(() => {
    const getTodos3 = async () => {
        try {
          const response3 = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=db5079a3779189dc15eb5636dc6d3fac');
          const data3 = await response3.json();
          return data3
        } catch(error) {
          console.error('Error fetching data', error);
        }
        
    } 
    getTodos3().then(data => setdata3(data.results));
    
  },[])

  
  return (
    <div className="">
      
      <h1 className="text-xl text-red-500 ml-36 w-52">Popular Movies</h1>
      <div className="m-28 flex flex-wrap justify-start gap-2">
        {data1.map(movie => <Link key={movie.id} to={`movie/${movie.id}`}> <Card title={movie.original_title} source={movie.poster_path} id={movie.id}  /> </Link>)}
      </div>

      <h1 className="text-xl text-red-500 ml-36 w-52">UpComing Movies</h1>
      <div className="m-28 flex flex-wrap justify-start gap-2">
        {data2.map(movie => <Link key={movie.id} to={`movie/${movie.id}`}> <Card title={movie.original_title} source={movie.poster_path} id={movie.id}  /> </Link>)}
      </div>
      
      <h1 className="text-xl text-red-500 ml-36 w-52">TV Shows</h1>
      <div className="m-28 flex flex-wrap justify-start gap-2">
        {data3.map(movie => <Link key={movie.id} to={`tv/${movie.id}`}> <Card title={movie.original_name} source={movie.poster_path} id={movie.id}  /> </Link>)}
      </div>

    </div>
    

  )
}

export default Home
