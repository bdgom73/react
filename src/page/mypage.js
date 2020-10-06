import React, { Component } from 'react';
import Axios from 'axios';
import Modal from "../comonents/modal"
class Mypage extends Component{
    constructor(props){
        super(props);
        this.state = {
            mypageInfo : {
                
            },
            page: 0,  
            params:'', 
            
    }
}
      loadingData = async ()=>{
        try {
            var bid = {
                bnum : this.props.match.params.userId
            }
            var res = await Axios.post("/check", bid)           
                this.setState({
                    mypageInfo : res
                })           
        } catch (error) {
           console.log(error);
        }  
    }
    componentDidMount() {
        this.loadingData();
        this.props.showOff()
        document.title = this.state.mypageInfo.userId
    }
    
    isModalhandler = (title,text,errorText,useClose)=>{  
        if(useClose === null) useClose = false;
        return <Modal title={title} text={text} errorText={errorText} useClose={false}/>
    } 
    isPageSetup = ()=>{
        const {page } = this.state
        if(page === 0 ){
            return(
                <div>
                    Page one
                </div>
            );
        }else if(page === 1){
            return <div>Page two</div>;
        }else if(page === 2){
            return <div>Page three</div>;
        }
    }

    render(){
        if(sessionStorage.getItem("uid") !== this.props.match.params.userId && sessionStorage.getItem("token")===null){
            if(sessionStorage.getItem("uid")===null){
                return (
                    <>
                    {console.log(this.props)}
                    {this.isModalhandler("로그인 오류","로그인을 해주세요\n 1초 후 자동으로 홈으로 이동합니다.")}
                    {setTimeout(() => {
                        window.location.replace(`/`)
                    }, 1000)}
                </>
                );
            }else {
                return (
                    <>
                        {this.isModalhandler("본인인증오류","본인의 계정정보와 현재 페이지의 정보가 다릅니다. \n 로그인 정보를 확인해주세요. \n 1초 후 본인페이지로 이동합니다.")}
                        {setTimeout(() => {
                            window.location.replace(`/user/mypage/${sessionStorage.getItem("uid")}`)
                        }, 1000)}
                        
                    </>
                );
            }
        }else{
            return(
                <>
                    <div class="mypageHeader">
                        <h2 onClick={()=>{this.setState({page:0})}}>마이페이지</h2>
                    </div>
                    <div class="mypageAside">
                        <ul>
                            <li onClick={()=>{this.setState({page:1})}}>내가쓴 글</li>
                            <li onClick={()=>{this.setState({page:2})}}>임시</li>
                        </ul>
                    </div>
                    <div class="mypageDesc">
                        {this.isPageSetup()}
                    </div>
                </>
            );
        }
        }
        
}
export default Mypage;