import React from 'react';
import './Controller.scss';

export default function Controller({
    input,
    changeTitleHandler, 
    toggleState,
    onTemperatureScaleChange
}) {
    const { title, show, isChecked } = input;
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
                    <div onChange = {(e)=>onTemperatureScaleChange(e.target.value)}
                        className='controller__input'>
                        <div className="controller__input_left">
                            <input 
                                className='radio'
                                type="radio" 
                                value="C" 
                                name="temperature"                        
                                checked={isChecked}       
                            />
                            <label htmlFor='C'> °C</label>
                        </div>
                        <div className="controller__input_right">
                            <input 
                                className='radio'
                                type="radio" 
                                value="F" 
                                name="temperature"
                                checked={!isChecked}                                                         
                            />
                            <label htmlFor='F'> °F</label> 
                        </div>
                    </div>                    
                </div>
                <div className='controller__toggle_w'>
                    <h4>Wind</h4>
                    <div  onChange={()=>toggleState()}
                        className='controller__input'>
                        <div className='controller__input_left'>
                            <input 
                                className='radio'
                                type="radio" 
                                value='On'
                                name="wind"
                                checked={show}                                                             
                                />
                            <label htmlFor='On'> On</label>
                        </div>                        
                        <input 
                            className='radio'
                            type="radio" 
                            value='Off' 
                            name="wind"
                            checked={!show}                             
                        />
                        <label htmlFor='Off'> Off</label>
                    </div>                   
                </div>
            </form>
        </div>
    )
}
