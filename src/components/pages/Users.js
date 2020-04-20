import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItems from "./UserItems";
import Spinner from '../layouts/Spinner';


const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={{width:"80%", margin:"0 auto"}}>
      <div className="row">
         
         
          
          
        {users.map(user => ( 
          
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" style={{marginTop:'2rem'}} key={user.login} >
              <UserItems user={user}>{user.login}</UserItems>      
          </div>
        ))}
      </div>
      </div>
    );
  }
};

export default Users;

