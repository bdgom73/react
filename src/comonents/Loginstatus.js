import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser  } from "react-icons/ai";
class Loginstatus extends Component{

    LoginStat(){
            if(sessionStorage.getItem("logined")!=="false" || this.props.islogined!=='logout'){
               return(
                <ul>
                    <li>
                        <div onClick={
                                e=>{
                                    e.preventDefault();
                                    this.props.onLoginPage();
                                }
                                }
                            >로그인</div>    
                    </li>
                    <li>
                        <div><NavLink to="/user/signup">회원가입</NavLink></div>
                    </li>
                </ul>
               );
            }
            // else if(sessionStorage.getItem("logined") ==="true" ||this.props.islogined ==='login')
            else
            {
                var userId = this.props.userId;
               
                return(
                <ul>
                    <li><div class="myinfo"><AiOutlineUser size="24"/>{userId} 님</div></li>
                    <li><NavLink to = {"/user/mypage/" + userId}>마이페이지</NavLink></li>
                    <li><button type="button" 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            this.props.onChangeLogin();
                        }
                        }>로그아웃</button></li>
                </ul>);
            }                   
    }
    render(){  
        return(
            <nav class="inlineNav"> 
                {this.LoginStat()} 
            </nav>
        );
    }
}
export default Loginstatus;


