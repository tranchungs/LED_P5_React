import React, { Component } from 'react';
import axios from 'axios';
import '../Css/function.css';
import '../Css/ledpanel.css';
import Sun from '../Image/sun.png';
import Cloud from '../Image/clouds.png';
import Rain from '../Image/rain.png';
class Function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lable: this.props.lable,
            program: 0,
            data: {},
            weather: '',
        };
    }
    async componentDidMount() {
        let data = await axios.get('https://ledp5server.herokuapp.com/api/led');
       if(data.data.data.color.r==7){data.data.data.color.r=255}
       if(data.data.data.color.r==4){data.data.data.color.r=127}
       if(data.data.data.color.g==7){data.data.data.color.g=255}
       if(data.data.data.color.g==4){data.data.data.color.g=127}
       if(data.data.data.color.b==7){data.data.data.color.b=255}
       if(data.data.data.color.b==4){data.data.data.color.b=127}
        this.setState({ program: data.data.program, data: data.data.data });
        switch (data.data.data.weather) {
            case 'Sun': {
                this.setState({ weather: Sun });
                break;
            }
            case 'Rain': {
                this.setState({ weather: Rain });
                break;
            }
            case 'Cloudy': {
                this.setState({ weather: Cloud });
                break;
            }
        }
    }
    async componentDidUpdate() {
        let data = await axios.get('https://ledp5server.herokuapp.com/api/led');
        if(data.data.data.color.r==7){data.data.data.color.r=255}
        if(data.data.data.color.r==4){data.data.data.color.r=127}
        if(data.data.data.color.g==7){data.data.data.color.g=255}
        if(data.data.data.color.g==4){data.data.data.color.g=127}
        if(data.data.data.color.b==7){data.data.data.color.b=255}
        if(data.data.data.color.b==4){data.data.data.color.b=127}
        this.setState({ program: data.data.program, data: data.data.data });
        switch (data.data.data.weather) {
            case 'Sun': {
                this.setState({ weather: Sun });
                break;
            }
            case 'Rain': {
                this.setState({ weather: Rain });
                break;
            }
            case 'Cloudy': {
                this.setState({ weather: Cloud });
                break;
            }
        }
    }
    render() {
        let { lable, program, data, weather } = this.state;

        switch (program) {
            case 0: {
                return (
                    <div className="function">
                        <div className="func_lable"> {lable}</div>
                        <div className="led_contain">
                            <div className="led_panel_status">
                                <div>
                                    <marquee style={{ color: `rgb(255,255,255)` }}>
                                        Nhom XVI - Nguyen Thi An - Do Thi Ngoc Anh - Nguyen Dang Hao - Tran Quang Chung
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            case 1: {
                return (
                    <div className="function">
                        <div className="func_lable"> {lable}</div>
                        <div className="led_contain">
                            <div className="led_panel_status">
                                <div className="Weather_contain">
                                    <div className='img_weather'>
                                        <img src={weather}></img>
                                    </div>
                                    <div className='info_weather'>
                                         <p>{data.temp}°C</p>
                                         <p>10:00</p>
                                         <p>{data.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            case 2: {
                return (
                    <div className="function">
                        <div className="func_lable"> {lable}</div>
                        <div className="led_contain">
                            <div className="led_panel_status">
                                <div>
                                    <marquee style={{ color: `rgb(${data.color.r},${data.color.g},${data.color.b})` }}>
                                        {data.text}
                                    </marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
}
export default Function;
