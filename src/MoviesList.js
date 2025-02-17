import React ,{useState,useEffect} from 'react';
import axios from 'axios';


const MovieList =() =>{
    const [list ,setList] = useState([])
    const [error,setError] = useState(null) 

    useEffect(() => { 
        const fetchMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/movies");
                setList(res.data);  // Update the list with the fetched data
            } catch (error) {
                setError("An error occurred");  
            }
        };

        fetchMovies();  // Call the function to fetch the data
    }, []); 

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
