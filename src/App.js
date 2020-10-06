import React, { Component } from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  Menu,
  Subject,
  Footer,
  Loginstatus,
  Progress,
  ResisterScreen,
  LoginScreen,
 } from './shared/index'
 import Freeboard from './page/Freeboard';
 import Boardread from './page/BoardRead';
 import BoardWrite from './page/BoardWrite';
import AdminPage from './page/AdminPage';

import Modal from './comonents/modal';
import './css/style.css'
import Mypage from './page/mypage';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      islogined : 'logout',
      onLoginPage: false,
      token : sessionStorage.getItem("userInfo") === undefined ? localStorage.getItem("userInfo") : sessionStorage.getItem("userInfo"), 
      userInfo:
        {
          userId: '', 
        },
      onModal:false,
      showSetting :{
        showOn:true,
        showHeader:true,
        showFooter:true,
      }          
    }
  }
  isModalhandler = (title,text,useClose)=>{  
    if(useClose === null) useClose = false;
    return <Modal title={title} text={text} useClose={useClose}/>
  }
  initializeUserInfo(){
    if(sessionStorage.getItem("userInfo") !== null && this.state.islogined === 'logout'){
      this.setState({islogined:'login'})
      sessionStorage.setItem("logined", true);
    }else if(sessionStorage.getItem("userInfo") === null && this.state.islogined === 'login'){
      this.setState({islogined:'logout'})
      sessionStorage.setItem("logined", false);
    }else if(sessionStorage.getItem("userInfo") === null){
      sessionStorage.setItem("logined", false);
    }
  }
  getLoginPage(){
    var loginState = this.state.onLoginPage;
    var page ='';
    if(loginState){
      page = <LoginScreen
      onClose={
        ()=>{this.setState({onLoginPage:false})}}
      sendInfo={
        ()=>{ 
          var _data = sessionStorage.getItem("userInfo");
          var _uid = sessionStorage.getItem("uid");
          this.setState({token : _data ,userInfo :{userId : _uid}});            
        }       
      }></LoginScreen>
    }return page;
  }
  componentDidMount(){
    this.initializeUserInfo()
  }

  showHeaderSetting = ()=>{
      if(this.state.showSetting.showOn === true){
        return (
          <header class="header" id="header">  
            <Subject></Subject>
            <Menu></Menu>
            <Loginstatus 
              userId = {sessionStorage.getItem("uid")} 
              islogined = {this.state.islogined}           
              onChangeLogin = {
                () => {     
                  sessionStorage.removeItem("userInfo");
                  sessionStorage.removeItem("uid")
                  sessionStorage.setItem("logined",false);
                  this.setState({islogined : 'logout',token : '',
                  userInfo:{
                    userId:''
                  }})}}
              onLoginPage={
                ()=>{this.setState({onLoginPage:true})}}></Loginstatus>    
          </header>
        );
      }
  }
  showFooterSetting = ()=>{
    if(this.state.showSetting.showOn === true){
      return <Footer></Footer>;
    }
  }
  render(){
    return (    
      <div className="App">
           {this.showHeaderSetting()}
          <div class="container">
            <Switch>   
              <Route exact path="/" component={Home}/>   
              <Route path="/Progress" component={Progress}/>   
              <Route exact path="/admin" render={(props)=> <AdminPage {...props} showOn={()=>{this.setState({showSetting:{showOn:true}})}} showOff={()=>{this.setState({showSetting:{showOn:false}})}}/>}/>
              <Route path="/user/mypage/:userId" render={(props)=> <Mypage {...props} showOff={()=>{this.setState({showSetting:{showOn:false}})}}/>}/>
              <Route exact path="/board/free" component={Freeboard}/>
              <Route exact path="/user/signup" component={ResisterScreen}/>
              <Route exact path="/board/write" component={BoardWrite}/>
              <Route path="/board/free/:boardId" component={Boardread}/>
              <Route path="/"> 
                  <div className="bestnotfound">
                    {this.isModalhandler()}
                  </div>
              </Route>  
            </Switch>    
          </div>
          {this.getLoginPage()}
          {this.showFooterSetting()}             
      </div>
    );
  }
}
export default App;
