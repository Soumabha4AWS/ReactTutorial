import React, {useState, useEffect} from 'react';
import './ReactTable.css';
import DataTable from 'react-data-table-component';
import axios from 'axios';

function ReactTable() {

    const [albums, setAlbums] = useState([]);
    const [posts, setPosts] = useState([]);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(()=>{     
    axios.get('https://jsonplaceholder.typicode.com/albums').then(res => setAlbums(res.data)).catch(err => console.log(err));
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err));
     setIsLoading(false);
   })


   const columnsforAlbums = [
    {
        name : "Id",
        selector : (row)=>row.id
    },
    {
        name : "UserId",
        selector : (row)=>row.userId        
    },
    {
        name : "Title",
        selector : (row)=>row.title        
    }
   ]


   const columnsforPosts = [    
    {
        name : "Body",
        selector : (row)=>row.body        
    }
   ]

   if (isLoading) {
    return <h3>Loading...</h3>
   }

  return (
    <div className='float-container'>
        <div className='float-child'>             
             <DataTable columns={columnsforAlbums} data={albums} />
        </div>
        <div className='float-child'> 
            <DataTable columns={columnsforPosts} data={posts} />
        </div>        
    </div>
  )
}

export default ReactTable