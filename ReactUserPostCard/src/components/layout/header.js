import React from 'react';
import { Link } from 'react-router-dom';

function YoutubeHeader() {
  return (
      <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                <Link to="" exact="true" >
                    <button className="btn btn-outline-success" type="button" >Users</button>
                </Link>
                <Link to="/post" >
                    <button className="btn btn-sm btn-outline-secondary" type="button">Posts</button>
                </Link>        
                </form>
            </nav>           
      </div>
    
  );
}

export default YoutubeHeader;
