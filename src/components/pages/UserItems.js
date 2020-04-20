import React from "react";
import { Link } from 'react-router-dom';

const UserItems = ({ user }) => {
  return (
    <div className="card" style={{width:'14rem'}}>
      <img src={user.avatar_url} className="card-img-top" height="100"alt="user" />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
       
        <Link to={`/user/${user.login}`} className="btn btn-primary">
          View User
        </Link>
      </div>
    </div>
  );
};

export default UserItems;
