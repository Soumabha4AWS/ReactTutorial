import React, { Component } from 'react';
import  ApiService from '../services/apiService'; 
import UserList from '../userList';



class UsersComponent extends Component {
    
    state = {
        users : []
    }

    componentWillMount() {
        new ApiService().getAllPost().subscribe(data => {           
            this.setState({ users : data });
          });
    }


    render() {

        return (
            <div className="container">
                <UserList usersProp={this.state.users}></UserList>
            </div>
        );

    }

}

export default UsersComponent;
