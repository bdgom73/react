import React, { Component } from 'react';
import Modal from "../comonents/modal"
import "../css/admin_style.css"
import { IoMdPerson  } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { Link } from 'react-router-dom';
export default class AdminPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdmin: true,
            userid:"Admin",
            iconColor:"#676565"
        }
    }
    isModalhandler = (title,text,errorText,useClose)=>{  
        if(useClose === null) useClose = false;
        return <Modal title={title} text={text} errorText={errorText} useClose={false}/>
    } 
    componentDidMount(){
        document.title = `관리자용 페이지`
        this.props.showOff()
    }
    render(){
        const {isAdmin} = this.state;
        if(isAdmin){
            return(
                <>
                <div class="adminWarp">
                    <div class="admin">                
                        <img src="/img/admintitle.png" alt="HomepageAdmin"/>                      
                        <span className="adminIcon"><IoMdPerson size="24" color="#f2dff0"/></span>
                        <span className="admininfo">{this.state.userid}님 어서오세요</span>
                        <span className="backmain" title="홈으로" 
                        onMouseEnter={()=>{this.setState({iconColor:"#fff"})}}
                        onMouseLeave={()=>{this.setState({iconColor:"#676565"})}}
                        onClick={()=>{this.props.showOn()}}>
                            <Link to="/">
                                <ImHome size="18" color={this.state.iconColor}/>
                            </Link>   
                        </span>
                    </div>
                    <div class="adminmain">     
                        <div class="adminaside">
                            <ul>
                                <li>회원조회</li>
                                <li>공지사항</li>
                                <li>게시글 조회</li>
                            </ul>
                        </div>  
                        <div class="admincenter">
                            정보가져오기..
                        </div>
                    </div>   
                       
                </div>
                </>
            );
        }else{
            return(
               <>   
               {this.isModalhandler("AUTHENTICATION ERROR","AUTHENTICATION ERROR \n You are not an administrator.")}
               <div style={{height:"1200px"}}></div>  
               </>
            );
        }
        
    }
}
