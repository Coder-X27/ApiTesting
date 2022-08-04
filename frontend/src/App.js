import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState([])

  const fetchdata = async () => {
    await axios.get(`http://localhost:4000/api/v1/getusers`).then((response) => {
      setUser(response.data.user);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {
        user.map((value) => {
          return (
            <>
              <div class="project-card card" key={value._id}  >
                <div class="card-body">
                  <h5 class="card-title">{value.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{value.email}</h6>
                  <p class="card-text">{value.password}</p>
                </div>
              </div>
            </>
          )
        })
      }
      {/* <hr />
      <hr />
      <hr />
      <div className="inputs">
        <input name='name' type="text" />
        <input name='email' type="text" />
        <input name='password' type="password" />
        <button></button>
      </div> */}
    </>
  );
}

export default App;