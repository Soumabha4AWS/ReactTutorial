import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import './DataFetching.css';

function UseQueryDataFetching() {


    const fetchAlbums = async ()=>{
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return data;
   }

   var {data , status} = useQuery('albumFetch', fetchAlbums);
   const dataAlbums = data;
   const statusAlbums = status;

   console.log("dataAlbums", dataAlbums, "statusAlbums", statusAlbums);

    const fetchPosts = async ()=>{
    await fetchAlbums();
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    return responsePosts;
   }

   var {data , status} = useQuery('postFetch',fetchPosts);
   const dataPosts = data;
   const statusPosts = status;
  
   console.log("dataPosts", dataPosts, "statusPosts", statusPosts);

   if (statusAlbums === 'loading' &&  statusPosts === 'loading') {
    return <h3>Loading...</h3>
   }

   if (statusAlbums === 'error' && statusPosts === 'error') {
    return <h3>Error...</h3>
   }


   
  return (
    <div className='float-container'>
        <h4>UseQueryDataFetching</h4>
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

export default UseQueryDataFetching