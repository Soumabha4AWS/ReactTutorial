import React from 'react';

const UserCard = (props) => {


  return (
        <div className="column">
          <div className="card" style={{width: "18rem"}}>          
                <div className="card-body">
                  <h5 className="card-title">{props.userProp.name}</h5>
                  <p className="card-text">{props.userProp.email}</p>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
          </div> 
        </div>  
         );
}

export default UserCard;
