import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdPerson,  } from "react-icons/io";
import { RiLockPasswordLine  } from "react-icons/ri";
class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state ={
            msg : ''
        }
    }
    render(){
        return(
            <div id="toplogin">
                <div class="loginpage">
                    <div onClick={
                        e=>{
                            e.preventDefault();
                            this.props.onClose();
                        }
                    } className="x" title="닫기"></div>
                    <div class="backlogo"/>
                    <h2>Login</h2>
                    <form method="post" 
                        onSubmit = {
                            e =>{
                                e.preventDefault();
                                const newUserInfo = {       
                                    userId : e.target[0].value,
                                    userPW: e.target[1].value        
                                }
                                Axios.post("/login", newUserInfo)
                                    .then((response) => {
                                        var data = response.data;
                                        console.log(response);
                                        if(data.value === "1" || data.value==="2"){
                                            this.setState({msg: data.msg})
                                        }
                                        else{
                                            sessionStorage.setItem("userInfo",data.token); 
                                            sessionStorage.setItem("uid",data.userId);  
                                               
                                            sessionStorage.setItem("logined",true);  
                                            this.sendInfo(data)                          
                                            this.props.onClose();
                                        }
                                               
                                    })
                            }
                        }
                        
                        >
                       
                        <label for="userId">회원ID</label>
                        <div className="userForm">
                        <label for="userId" className="usericon"><IoMdPerson color="#fff"/></label>
                        <input type="text" name="userId" placeholder="ID를 입력해주세요"/>
                        </div>
                        <label for="userPW">비밀번호</label>
                        <div className="userForm">
                        <label for="userPW" className="usericon"><RiLockPasswordLine color="#fff"/></label>
                        <input type="password" name="userPW" placeholder="PW를 입력해주세요"/>
                        </div>
                        <div class="msg">{this.state.msg}</div>
                        <input type="submit" value="로그인" class="loginsubmit"/>
                    </form>
                    <div className="signupexplan">계정이 없으신가요?<div class="signupmove"><Link to="/user/signup" onClick={()=>{this.props.onClose()}}>회원가입</Link></div></div>
                </div>
            </div>
        );
    }
}

export default LoginScreen;