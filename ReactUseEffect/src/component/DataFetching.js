import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './DataFetching.css';

function DataFetching() {

   const [albums, setAlbums] = useState([]);
   const [posts, setPosts] = useState([]);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => setAlbums(res.data)).catch(err => console.log(err));
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err));
    setIsLoading(false);
   })

   if (isLoading) {
    return <h3>Loading...</h3>
   }

  return (
    <div className='float-container'>
        <h4>DataFetching</h4>
        <div className='float-child'>
            <ul>
                {
                    albums.map(album => <li key={album.id}>{album.title}</li> )
                }
            </ul>
        </div>
        <div className='float-child'> 
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li> )
                }
            </ul>
        </div>        
    </div>
  )
}

export default DataFetching