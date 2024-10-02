import { useState,useEffect } from 'react';
import './App.css';
import api from './api/axiosconfig';
import { Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';




function App() {
  const [movies,setMovies] =useState();
  const [error, setError] = useState(null);
  // const[singleMovies,setSingleMovies]=useState();


  const getMovies = async () =>{
    try {
      const response= await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch movies. Please try again.");
    }
  }

  // const getSingleMovies= async () =>{
  //   try{
  //     const response=await api.get("/{imdbId}");
  //     console.log(response.data);
  //     setSingleMovies(response.data);
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  
  useEffect(() =>{
    getMovies();
    // getSingleMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home movies={movies}/>}></Route>
      <Route path="/home" element={<Home movies={movies}/>}></Route>
      <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
