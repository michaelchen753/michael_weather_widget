import React, {
  useState,
  useEffect
} from 'react';
import Controller from '../components/Controller/Controller';
import DisplayPanel from '../components/DisplayPanel/DisplayPanel';
import { API_URL, API_KEY} from '../utils/constants';
import '../App.scss';

function Container() {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [input, setInput] = useState({
    title: '  Title of widget',
    show: true,
    scale: 'C',
  });

  const changeTitleHandler = (value) => {
    const updateTitle = {
      ...input,
      title: value,
    }
    setInput(updateTitle);
  };

  const toggleState = () => {
    const toggle = {
      ...input,
      show: !input.show,
    }
    setInput(toggle);
  };

  const temperatureScaleChange = (value) => {
    const updateScale = {
      ...input,
      scale: value 
    }
    setInput(updateScale);
  };

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
    <div className = "App">
    { isError && <div>Something went wrong...</div>}
    {
      !loading && data.main?(
        <div className = 'App__container'>
            <Controller 
                changeTitleHandler = {changeTitleHandler}
                toggleState = {toggleState}
                temperatureScaleChange = {temperatureScaleChange}
                input = {input}
              />
            <DisplayPanel 
                data = {data} 
                input = {input}
             />
        </div>  
      ):(
        <div>Loading...</div>
      )
    }
    </div>
  );
}

export default Container;
