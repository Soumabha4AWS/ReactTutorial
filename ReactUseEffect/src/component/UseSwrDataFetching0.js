import React from 'react';
import axios from 'axios';
import useSwr from 'swr';
import './DataFetching.css';

function UseSwrDataFetching0() {

    // const fetchAlbums = () => axios.get('https://jsonplaceholder.typicode.com/users').then(resp => resp.data);
    
    const fetchAlbums = async ()=>{
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data;
       }
   

   const {data , error} = useSwr('fetchAlbums',fetchAlbums);
   const dataAlbums = data;
   const errorAlbums = error;

   console.log("dataAlbums", data, "errorAlbums", error);


   if (!dataAlbums) {
    return <h3>Loading...</h3>
   }

   if (errorAlbums) {
    return <h3>Error...</h3>
   }


   
  return (
    <div className='float-container'>
        <h4>UseSwrDataFetching0</h4>
        <div className='float-child'>
            <ul>
                {
                    <li> Albums </li>
                    // dataAlbums.map(album => <li key={album.id}>{album.name}</li> )
                }
            </ul>
        </div>
        <div className='float-child'> 
            <ul>
                {
                    // <li> Posts </li>
                    dataAlbums.map(album => <li key={album.id}>{album.name}</li> )
                }
            </ul>
        </div>        
    </div>
  )
}

export default UseSwrDataFetching0