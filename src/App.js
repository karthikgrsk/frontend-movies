import { useState,useEffect } from 'react';
import './App.css';
import api from './api/axiosconfig';
import { Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/reviews/Reviews';
import Notfound from './component/notfound/Notfound';



function App() {
  const [movies,setMovies] =useState();
  const [movie,setMovie] =useState();
  const [reviews, setReviews] = useState([]);




  const getMovies = async () =>{
    try {
      const response= await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData= async (movieId) =>{
    try{
      const response=await api.get(`/api/v1/movies/${movieId}`);
      
      const singleMovie= response.data;

     setMovie(singleMovie);

     setReviews(singleMovie.reviews);

    }
    catch(error)
    {
      console.log(error)
    }
  }
  
  useEffect(() =>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home movies={movies}/>}></Route>
      <Route path="/home" element={<Home movies={movies}/>}></Route>
      <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
      <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
      <Route path="/*"element={<Notfound />}></Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
