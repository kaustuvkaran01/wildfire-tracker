// import logo from './logo.svg';
// import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';
function App() {

  const [eventData,setEventData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const fetchEvents = async() => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json();
      setEventData(events);
      setLoading(false);
    }
    fetchEvents();
    // console.log(eventData);
  },[])

  return (
    <div className="App">
      <Header />
      {loading?<Loader />:<Map eventData={eventData} />}
     {/* <Map /> */}
    </div>
  );
}

export default App;