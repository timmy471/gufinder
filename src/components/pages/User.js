import React, { useEffect, useContext } from "react";
import Spinner from '../layouts/Spinner';
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);

    // eslint-disable-next-line
  }, []);

  const {
    avatar_url,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos,
  } = user;


  if (loading){
    return <Spinner />
  }else{
    return (
      <div className="text-center ">
        <div className="card mb-3 " style={{ Width: "900px", marginTop: "2rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={avatar_url}
                className="card-img rounded-circle"
                alt="profile"
                style={{ height: "60%", width: "50%", margin: "2rem" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-text">
                 {bio}
                </p>
                <div className="card-text">
                  <p className="text-muted"><button style={{backgroundColor:"#ad3473", color:"white", border:"none"}}>{followers} followers</button>  &nbsp;
                   <button style={{backgroundColor:"#34ad5a", border:"none", color:"white"}}>{following} following</button>  &nbsp; 
                   <button style={{backgroundColor:"#26878c",color:"white", border:"none"}}>{public_repos} Repos</button></p>
                   <p><a href={html_url}>Visit github profile</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );}

};

export default User;
