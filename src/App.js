import { useState,useEffect } from 'react';
import './App.css';
import api from './api/axiosconfig';

function App() {
  const [movies,setMovies] =useState();
  const [error, setError] = useState(null); 


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
  
  useEffect(() =>{
    getMovies();
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
