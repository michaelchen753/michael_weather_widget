import React, { useState, useEffect } from 'react';
import Controller from './components/Controller/Controller';
import DisplayPanel from './components/DisplayPanel/DisplayPanel';
import { API_URL, API_KEY} from './utils/constants';
import './App.scss';

function App() {
  const [lat, setLat]= useState('');
  const [lon, setLon] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState('   Title of widget');
  const [show, setShow] = useState(true);


  const changeTitleHandler=(event)=>{
    setTitle(event.target.value);
  };

  const toggleState = ()=>{
    setShow(!show);
  }

useEffect(() => {
 const fetchData = async () => {
    setLoading(true);
    if(navigator.geolocation){     
      navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
   }); 
   } else {
     setLoading(false);
     alert('Sorry. Geolocation is not supported by this browser.');
   }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const result = await res.json();
      if(result){
        setData(result);
        setLoading(false);      
    }
  }catch (error) {
    setLoading(false);
    setIsError(true);
  }
  }   
    fetchData();
  }, [lat,lon]);

  return (
    <div className="App">
    { isError && <div>Something went wrong...</div>}
    {
      !loading && data.main?(
        <div className='App__container'>
            <Controller 
                changeTitleHandler={changeTitleHandler}
                toggleState={toggleState}
                show={show}
                title={title}
              />
            <DisplayPanel data={data} title={title} show={show} />
        </div>  
      ):(
        <div>Loading...</div>
      )
    }
    </div>
  );
}

export default App;
