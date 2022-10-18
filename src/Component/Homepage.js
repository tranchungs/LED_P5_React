import React, { Component }  from 'react';
import FunctionLED from './FunctionLED'
import FunctionButton from './FunctionButton';
import Footer from './Footer';
import PanelWeather from './PanelWeather'
import Toast from './Toast';
import '../Css/homepage.css'
class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <div className="info">Group XVI</div>
                <div className="function_div">
                 <FunctionLED lable="Led 64x32">
                 </FunctionLED>
                 <FunctionButton lable="Led Panel">

                 </FunctionButton>
                </div>
                <Footer></Footer>
                <Toast></Toast>
            </div>
        );
    }
}
export default Homepage;
