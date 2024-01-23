import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";


function Layouts() {

  const [searchTerm, setSearchTerm] = useState("");  

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div>
        <header className="m-5 rounded-md bg-indigo-700 border-2 " >

            <nav className="flex justify-center gap-16 text-yellow-400">
                <NavLink to="/" className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" >HOME</NavLink>
                <NavLink to="genre" className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" >GENRE</NavLink>
                <NavLink to="movies" className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" >MOVIES</NavLink>
                <NavLink to="tv" className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" >TV Shows</NavLink>
                <NavLink to="topimdb" className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" >TOP IMDB</NavLink>
            </nav>
            <div className="grid justify-center mt-10 mb-4 gap-2">
              <h1 className="text-2xl">Find Movies, Tv shows and more</h1>
              <input 
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="rounded-md" 
                placeholder="..." 
              />
              
              <button> <NavLink to={searchTerm} className="mt-2 p-2 rounded-lg transition duration-300 hover:text-white hover:bg-black" > Search </NavLink> </button>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layouts