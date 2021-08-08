import React from 'react';
import { windDirection, celConverter, fahConverter, windspeedConverter} from '../../utils/converter';
import { useGlobalContext } from '../../AppContext';
import './DisplayPanel.scss';

export default function DisplayPanel({data,title, show}) {
  
const { unit } = useGlobalContext();    
const { name, main, wind, weather } = data;

    return (
        <div className='displaypanel'>
            <div className='displaypanel__container'>
                <h4>{title.toUpperCase()}</h4>
                <div className='displaypanel__content'>
                    <img 
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt={weather[0].description}
                    />
                    <div className='displaypanel__content_info'>
                        <div className='displaypanel__city'>{name}</div>                        
                        {
                            unit ==='C'?                
                            <span className='displaypanel__tem'>{celConverter(main.temp)}°</span>:
                            <span className='displaypanel__tem'>{fahConverter(main.temp)}°</span>
                        }
                        { show &&  
                            <div>                        
                                <span className='displaypanel__text'>Wind</span> <span>{windDirection(wind.deg)} </span><span>{windspeedConverter(wind.speed)}km/h</span>
                            </div>
                        }
                    </div>
                </div>                
            </div>
        </div>
    )
}
