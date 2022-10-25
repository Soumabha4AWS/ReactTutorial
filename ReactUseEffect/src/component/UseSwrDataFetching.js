import React from 'react';
import axios from 'axios';
import useSwr from 'swr';
import './DataFetching.css';

function UseSwrDataFetching() {


    const fetchAlbums = async ()=>{
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return data;
   }

   var {data , error} = useSwr('albumFetch', fetchAlbums);
   const dataAlbums = data;
   const errorAlbums = error;

   console.log("dataAlbums", dataAlbums, "statusAlbums", errorAlbums);

    const fetchPosts = async ()=>{
    await fetchAlbums();
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    return responsePosts;
   }

   var {data , error} = useSwr('postFetch',fetchPosts);
   const dataPosts = data;
   const errorPosts = error;
  
   console.log("dataPosts", dataPosts, "statusPosts", errorPosts);

   if (!dataAlbums &&  !dataPosts) {
    return <h3>Loading...</h3>
   }

   if (errorAlbums && errorPosts) {
    return <h3>Error...</h3>
   }
   
  return (
    <div className='float-container'>
        <h4>UseSwrDataFetching</h4>
        <div className='float-child'>
            <ul>
                {
                    // <li> Albums </li>
                    dataAlbums.map(album => <li key={album.id}>{album.title}</li> )
                }
            </ul>
        </div>
        <div className='float-child'> 
            <ul>
                {
                    // <li> Posts </li>
                    dataPosts.map(post => <li key={post.id}>{post.body}</li> )
                }
            </ul>
        </div>        
    </div>
  )
}

export default UseSwrDataFetching