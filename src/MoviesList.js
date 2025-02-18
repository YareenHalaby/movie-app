import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


        const fetchMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/movies");
                return res.data;  
            } catch (error) {
                throw new Error("An error occurred while fetching the data"); 
            }
        };

        const MovieList =() =>{
            const {data:list,error,isLoading}= useQuery({
                queryKey:['movies'],
                queryFn :fetchMovies,
                staleTime:60000
            });


        
 if (isLoading) {
    return <h1>Loading...</h1>;
}  

if(error){
    return <h1 style={{color:'red'}}> an error occured while fetching the data </h1>
}

return (
    <div>
      <h1>Movies List</h1>
      <div className="movies-container"> 
        {list.map((movie, index) => (
          <div key={index} className="movie-card"> 
            <h3>{movie.title}</h3>
            <p>Release Year: {movie.year}</p>
            {movie.image && (
                            <img 
                                src={movie.image} 
                                alt={movie.title} 
                                className="movie-image" 
                            />
                        )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
