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
            <div className="card" key={value._id}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{value.name}</li>
                  <li className="list-group-item">{value.email}</li>
                  <li className="list-group-item">{value.password}</li>
                </ul>
            </div>
            </>
          )
        })
      }
    </>
  );
}

export default App;