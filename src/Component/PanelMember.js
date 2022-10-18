import React, { Component } from 'react';
import ButtonClose from './ButtonClose';
import axios from 'axios';
import Chung from '../Image/Chung.jpg';
import Hao from '../Image/Hao.jpg';
import NgocAnh from '../Image/Na.jpg';
import An from '../Image/An.jpg';
class PanelMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            member: [
                { name: 'Trần Quang Chung', job: 'Member', image: Chung, id: 'CT040306' },
                { name: 'Nguyễn Đăng Hào', job: 'Member', image: Hao, id: 'CT040317' },
                { name: 'Đỗ Thị Ngọc Anh', job: 'Leader', image: NgocAnh, id: 'CT040104' },
                { name: 'Nguyễn Thị An', job: 'Leader', image: An, id: 'CT040101' },
            ],
        };
        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
    }
    onClickRight(){
        let i_old = this.state.index;
        i_old++;
        if(i_old>3){
            i_old =0;
        }
        this.setState({index:i_old});
    }
    onClickLeft(){
        let i_old = this.state.index;
        i_old--;
        if(i_old<0){
            i_old =3;
        }
        this.setState({index:i_old});
    }
    async onClickBtnShow(){
        try {
            let data = {
                program:0,
                data:{}
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
        } catch (error) {
            
        }
         
    }
    render() {
        let { index, member } = this.state;
        return (
            <div className="panel">
                <div id="panel_member_btn" className="aside-overlay">
                   
                    <div className="panel_member">
                    <p>Member Of Group XVI</p>
                        <div className="img_member">
                            <div className='btn_control' onClick={()=>{this.onClickLeft()}}>{'<'}</div>
                            <div>
                                <img src={member[index].image} style={{ width: '108px', height: '108px' }}></img>
                            </div>
                            <div className='btn_control' onClick={()=>{this.onClickRight()}}>{'>'}</div>
                        </div>
                        <div className='name_member'>
                        {member[index].name}
                        </div>
                        <div className='des_member'>
                           {member[index].id}
                        </div>
                        <div className='btn_member' onClick={()=>{this.onClickBtnShow()}}>Click to show all member</div>
                        <ButtonClose value="panel_member_btn"></ButtonClose>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default PanelMember;
