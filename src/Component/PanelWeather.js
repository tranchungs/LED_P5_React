import React, { Component } from 'react';
import ButtonClose from './ButtonClose';
import Sun from '../Image/sun.png';
import Cloud from '../Image/clouds.png';
import Rain from '../Image/rain.png';
import axios from 'axios';

class PanelWeather extends Component {
    constructor(props) {
        super(props);
    }
    async onClickImg(weather) {
        try {
            let data = {
                program: 1,
                data: {
                    weather: weather,
                },
            };
            let respon = await axios.post('https://ledp5server.herokuapp.com/api/led', data);
            if(respon.data.status){
                var x = document.getElementById('snackbar');
                x.innerHTML = "Success";
                x.className = 'show';
                setTimeout(function() {
                    x.className = x.className.replace('show', '');
                }, 3000);
            }else{
                var x = document.getElementById('snackbar');
                x.innerHTML = "Set Fail";
                x.className = 'show';
                setTimeout(function() {
                    x.className = x.className.replace('show', '');
                }, 3000);
            }
           
        } catch {
            var x = document.getElementById('snackbar');
                x.innerHTML = "Set Fail";
                x.className = 'show';
                setTimeout(function() {
                    x.className = x.className.replace('show', '');
                }, 3000);
        }
    }
    render() {
        return (
            <div className="panel">
                <div id="panel_weather_btn" className="aside-overlay">
                    <div className="panel_weather">
                        <div className="img_weather">
                            <img
                                src={Sun}
                                className="panel_weather_img"
                                onClick={() => {
                                    this.onClickImg('Sun');
                                }}
                            ></img>
                            <img
                                src={Cloud}
                                className="panel_weather_img"
                                onClick={() => {
                                    this.onClickImg('Cloudy');
                                }}
                            ></img>
                            <img
                                src={Rain}
                                className="panel_weather_img"
                                onClick={() => {
                                    this.onClickImg('Rain');
                                }}
                            ></img>
                        </div>
                        <p style={{ color: 'rgb(127, 90, 240)' }}>Click icon to set display weather</p>
                        <ButtonClose value="panel_weather_btn"></ButtonClose>
                    </div>
                </div>
            </div>
        );
    }
}
export default PanelWeather;
