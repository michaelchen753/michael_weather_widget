import React from 'react';
import { useGlobalContext } from '../../AppContext';
import './Controller.scss';

export default function Controller({title, changeTitleHandler, toggleState,show}) {
    const { unit, setUnit } = useGlobalContext();
    return (
        <div className='controller'>
            <form>
                <h4>Title</h4>
                <input 
                    className='controller__textbox'
                    type='text' 
                    value={title}
                    onChange={changeTitleHandler}
                    name='title'                    
                />
                <div className='controller__toggle_t'>
                    <h4>Temperature</h4>
                    <div className='controller__input'>
                        <div className="controller__input_left">
                            <input 
                                className='radio'
                                type="radio" 
                                value="C" 
                                name="temperature"                        
                                checked={unit==='C'}                        
                                onChange={()=>setUnit('C')}                            
                            />
                            <label htmlFor='C'> °C</label>
                        </div>
                        <div className="controller__input_right">
                            <input 
                                className='radio'
                                type="radio" 
                                value="F" 
                                name="temperature"
                                checked={unit==='F'}
                                onChange={()=>setUnit('F')}                            
                            />
                            <label htmlFor='F'> °F</label> 
                        </div>
                    </div>                    
                </div>
                <div className='controller__toggle_w'>
                    <h4>Wind</h4>
                    <div className='controller__input'>
                        <div className='controller__input_left'>
                            <input 
                                className='radio'
                                type="radio" 
                                value='On'
                                name="wind" 
                                onChange={()=>toggleState()}
                                checked={show}                                                             
                                />
                            <label htmlFor='On'> On</label>
                        </div>                        
                        <input 
                            className='radio'
                            type="radio" 
                            value='Off' 
                            name="wind"
                            onChange={()=>toggleState()}
                            checked={!show}                             
                        />
                        <label htmlFor='Off'> Off</label>
                    </div>                   
                </div>
            </form>
        </div>
    )
}
