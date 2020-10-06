import React, { Component } from 'react';
import Axios from 'axios';

class ResisterScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg : ''
        }
      }

    componentDidMount(){
        document.title = `자동물류창고-회원가입`
    }
    render(){
        const {msg} = this.state;
        return(
                <div className="memberjoin">
                    <span>본 페이지는 웹페이지를 이용한 과제제출을 위한 회원가입 페이지입니다.        
                    </span>
                    <h2>회원가입</h2>
                    <form action="/user/signup" method="post" 
                        onSubmit = {
                            e =>{
                                e.preventDefault();
                                const newUserInfo = {
                                    userName : e.target[0].value,
                                    userId : e.target[1].value,
                                    userPW: e.target[2].value,
                                    userPW_re : e.target[3].value,
                                    userEmail : e.target[4].value,    
                                }
                                Axios.post("/signup", newUserInfo)
                                    .then(response => {
                                        var data = response.data;
                                        console.log(data);
                                        if(data.value === "1" || data.value==="2" || 
                                        data.value==="3" || data.value==="4"){
                                            this.setState({msg:data.msg})
                                        }else{
                                            alert(data.msg);
                                            this.props.history.push("/");
                                        }
                                      
                                    })
                            }
                        }>
                        <label for="userName">이름</label>
                        <input type="text" name="userName" placeholder="이름을 입력해주세요"/>
                        <label for="userId">회원ID</label>
                        <input type="text" name="userId" placeholder="ID를 입력해주세요"/> 
                        <label for="userPW">비밀번호</label>
                        <input type="password" name="userPW" placeholder="PW를 입력해주세요"/>
                        <label for="userPW_re">비밀번호 재입력</label>
                        <input type="password" name="userPW_re" placeholder="PW를 다시 입력해주세요"/>
                        <label for="userEmail">Email</label>
                        <input type="email" name="userEmail" placeholder="Email을 입력해주세요"/>
                        <span>{msg}</span>
                        <input type="submit" value="회원가입" class="loginsubmit"/>                      
                  </form>
                </div>
        );
    }
}

export default ResisterScreen;