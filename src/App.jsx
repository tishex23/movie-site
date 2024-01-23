import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import './App.css'

//layouts
import Layouts from './layouts.page/Layouts'
import GenreLayout from './layouts.page/GenreLayout'
import MovieLayout from './layouts.page/MovieLayout'
import TvLayout from './layouts.page/TvLayout'
import TopimdbLayout from './layouts.page/TopimdbLayout'
import ResultsLayout from './layouts.page/ResultsLayout'

//pages
import Home from './pages/Home'
import Genre from './pages/Genre'
import Tv from './pages/Tv'
import Movies from './pages/Movies'
import Topimdb from './pages/Topimdb'
import MovieDetails from './Components/MovieDetails'
import Results from './pages/Results'

function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layouts />} >
        <Route index element={<Home />} />

        <Route index path=':detail/:id' element={<MovieDetails />} />

        <Route path='genre' element={<GenreLayout />} >
          <Route index element={<Genre />} />
          <Route path=':detail/:id' element={<MovieDetails />} />
        </Route> 
        
        <Route path='movies' element={<MovieLayout />} >
          <Route index element={<Movies />} />
          <Route path=':detail/:id' element={<MovieDetails />} />
        </Route>

        <Route path='tv' element={<TvLayout />} >
          <Route index element={<Tv />} />
          <Route path=':detail/:id' element={<MovieDetails />} />
        </Route>

        <Route path='topimdb' element={<TopimdbLayout />} >
          <Route index element={<Topimdb />} />
          <Route path=':detail/:id' element={<MovieDetails />} />
        </Route>

        

        <Route path=':results' element={<ResultsLayout />} >
          <Route index element={<Results />} />
          <Route index path=':detail/:id' element={<MovieDetails />} />
        </Route>
        
      </Route>
    )
  )

  return (
    <div className="bg-slate-500 pt-4 pb-20">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
