import React, { Component }  from 'react';
import '../Css/function.css'
import PanelWeather from './PanelWeather'
import PanelSetText from './PanelSetText';
import PanelMember from './PanelMember';
class FunctionButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            lable:this.props.lable
        }
    }
    onClickWeatherDisplay(text_id){
        let open = document.getElementById(text_id);
        open.style.display = "flex";
    }
    onClickDrawEverything(){
        var x = document.getElementById('snackbar');
        x.innerHTML = "Function update in next time";
        x.className = 'show';
        setTimeout(function() {
            x.className = x.className.replace('show', '');
        }, 3000);
    }
    render() {
        let {lable} = this.state;
        console.log(this.props);
        return (
            <div className="function">
                <div className='func_lable'> {lable}</div>
                <div className='panel_contain'>
                <PanelWeather></PanelWeather>
                <PanelSetText></PanelSetText>
                <PanelMember></PanelMember>
                    <div className='button' onClick={()=>{this.onClickWeatherDisplay('panel_weather_btn')}}>Weather Display</div>  
                    <div className='button' onClick={()=>{this.onClickWeatherDisplay('panel_member_btn')}}>Member Display</div>
                    <div className='button'onClick={()=>{this.onClickWeatherDisplay('panel_settext_btn')}} >Set Text Display</div>
                    <div className='button' onClick={()=>{this.onClickDrawEverything()}} >Draw Everything</div>
                </div>
            </div>
        );
    }
}
export default FunctionButton;
