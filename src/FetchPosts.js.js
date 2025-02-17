import React from 'react';
import axios from 'axios' ;
import {useQuery} from '@tanstack/react-query';

const fetchData = async() =>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}
    export function PostsList (){
        const {data: posts, error, isLoading} = useQuery({
            queryKey:['posts'],
            queryFn :fetchData,
            staleTime:60000
        });
    

    if (isLoading) return <p>loading posts...</p>
    if(error) return <p>Error: {error.message} </p>

    return(
        <div> 
            <h2>posts list</h2>
            <ul>
                {posts.map(post => (
                    <li key= {post.id}>
                        <strong>{post.title}</strong> - {post.body}
                         </li>

                ))}
            </ul>

        </div>
    )
    
    
}


