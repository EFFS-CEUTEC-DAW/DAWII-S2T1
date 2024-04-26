import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users/7');
        const user = response.data.data;
        setUserInfo(user);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {userInfo && (
              <>
                <img 
                  src={userInfo.avatar}
                  alt={`${userInfo.first_name} ${userInfo.last_name}`}
                  style={{ height: '30px', width:"30", marginRight: '10px' }}
                  className="d-inline-block align-text-top" />
                {`${userInfo.first_name} ${userInfo.last_name}`}
              </>
            )}
          </a>

          <Link to='/' className="navbar-brand">Lista Pokemón</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">

          </div>

        </div>
      </nav>
    </>
  )
}
