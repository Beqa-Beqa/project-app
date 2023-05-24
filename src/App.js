// Importing neccessities
import axios from 'axios';
import './App.css';
import {useEffect, useState} from 'react';
import Friends from './Container/Friends';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import FriendDetails from './Container/FriendDetails';

function App() {
  // Calling API 
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((result) => {
      setInfo(result.data.results);
    })
  }, []);
  // Storing Api info
  const [info, setInfo] = useState([]);
  // Checking if Friends button is clicked or not
  const [visibleFriends, setVisibleFriends] = useState(false);
  // Storing information about friend whom is clicked
  const [friendDetails, setFriendDetails] = useState({});
  // useEffect runs after first render when component mounts
  // it causes 2 renders at first. Until useffect render 
  // info from api is not gathered and because of that 
  // we are checking if info is taken or not from api
  // with this if statemenet to avoid errors.
  if(info.length > 0) {
    return (
      <div className='app__container'>
        <div className='app'>
          <Home visibleFriends={visibleFriends} setVisibleFriends={setVisibleFriends} /> 
            {visibleFriends ?
              <Friends setFriendDetails={setFriendDetails} info={info} />
              :
              null
            }
        </div>
        <div className='friend'>
          {/* Checking if friendDetails is an empty object or not
          to avoid errors and bugs with this ternary operator */}
          {Object.keys(friendDetails) != 0 ? 
            // Render pecific person
            <FriendDetails
            name={friendDetails.name}
            lastName={friendDetails.lastName}
            phone={friendDetails.phone}
            adress={friendDetails.adress}
            email={friendDetails.email}
            image={friendDetails.imageLarge}
            /> 
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;