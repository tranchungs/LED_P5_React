import React, { Component } from 'react';
import '../Css/function.css';
import ButtonClose from './ButtonClose';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import mute from '../Image/mute.png';
import micro from '../Image/voice.png';

async function postData(transcript){  
    SpeechRecognition.stopListening();
     if(transcript == ""){
        var x = document.getElementById('snackbar');
        x.innerHTML = "Speech none!";
        x.className = 'show';
        setTimeout(function() {
            x.className = x.className.replace('show', '');
        }, 3000);
     }else{
    
        let data = {
            program:2,
            data:{
                text:transcript,   
            }
        }
        let respon = await axios.post("https://ledp5server.herokuapp.com/api/led",data);
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

     }

}
const DrawEverything = () => {
    let imgsrc = mute;
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (listening) {
        imgsrc = micro;
    } else {
        imgsrc = mute;
    }
    return (
        <div className="panel">
            <div id="panel_setvoice_btn" className="aside-overlay">
                <div className="content_speech">
                    <div className="img_speech">
                        <img src={imgsrc} style={{ width: '62px', height: '62px' }}></img>
                    </div>
                    <div className="speech_func">
                        <div className='speech_btn' onClick={async () => await SpeechRecognition.startListening({ language: 'en-US' })}>
                            Start
                        </div>
                        <div className='speech_btn' onClick={()=>postData(transcript)}>Stop</div>
                        <div className='speech_btn' onClick={resetTranscript}>Reset</div>
                    </div>
                    <div className="speech_result">
                        <textarea value={transcript}></textarea>
                    </div>
                    <ButtonClose value="panel_setvoice_btn"></ButtonClose>
                </div>
                
            </div>
        </div>
    );
};

export default DrawEverything;
