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
      {/* <h1>Hello</h1>
      <button onClick={fetchdata}>click me</button> */}
      {
        user.map((value) => {
          return (
            <>
              <h1>Name is {value.name}</h1>
              <h1>Email is {value.email}</h1>
              <h1>Password is {value.password}</h1>
            </>
          )
        })
      }
    </>
  );
}

export default App;