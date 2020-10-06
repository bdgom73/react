import React, { Component } from 'react';
import "../css/homeCard.css"
import { Link } from 'react-router-dom';

class SiteInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
          style:{

          },
          rightBtn:"/img/rightBtn.png",
        }
    }
    componentDidMount(){
        document.title = "자동물류창고"
    }
    render(){
        return(
            <>           
            <div className="home-siteinfo-card s"  no={this.props.num}
                onMouseOver={()=>{
                    document.getElementsByClassName("home-siteinfo-card")[this.props.num].classList.add("selectCard"); 
                    document.getElementsByClassName("home-siteinfo-card")[this.props.num].classList.remove("s");
                    this.setState({style:{backgroundColor:"rgba(0,0,0,0.6)"}})
                    for(var i = 0 ; i < document.querySelectorAll(".s").length ; i++){
                        document.getElementsByClassName("s")[i].classList.add("widthSize")   
                    }                     
                }}
                onMouseLeave={()=>{
                    document.getElementsByClassName("home-siteinfo-card")[this.props.num].classList.remove("selectCard");
                    document.getElementsByClassName("home-siteinfo-card")[this.props.num].classList.add("s");
                    this.setState({style:{}})
                    for(var i = 0 ; i < document.querySelectorAll(".s").length ; i++){
                        document.getElementsByClassName("s")[i].classList.remove("widthSize")   
                    } 
                }}
                
                style={{ backgroundImage: `url(${this.props.img})`}}
                >
                <div className="home-siteinfo-card-back" style={this.state.style}> 
                    <div className="home-siteinfo-card-content">
                        <h2>{this.props.title}</h2>
                        <span><pre>{this.props.text}</pre></span>   
                    </div>
                    <div className="rightBtn-controller" >
                        <Link to={this.props.path} onClick={()=>{window.scrollTo(0,0)}} className="rightBtn-set">     
                            <button type="button" className="rightBtn">
                                <i>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                &nbsp;READ</i>
                            </button>
                        </Link>  
                    </div>
                    
                </div>
                                     
                
                
            </div>   
            </>
        );
    }
}
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          
          
        }
    }

  
    render(){
     
        return(
            <div class="middle">                
                <div class="middle_Content">
                    <div class="center_font">
                        한국폴리텍대학 인천캠퍼스<br/>
                        정보통신과<br/><br/>
                        <span class="a2font">2-A</span> <br/>
                        <span class="center_font_small">Automated Storage and Retrieval System</span>
                    </div>
                </div>
                <div class="middle_Content_next">
                    <div class="subject">
                        <span class="sh1">Automated Storage </span><br/> 
                        <span class="sht1">and</span> <br/>
                        <span class="sh2">Retrieval System</span> <br/>
                        <span class="sh3">" AS/RS "</span>
                    </div>
                    <div class="sub_subject">
                        " 아두이노를 이용한 자동물류창고 과제 "
                    </div>
                </div> 
               
                <div className="home-siteinfo">
                    <SiteInfo 
                        title="부품" 
                        text={`Arduino Uno와 클램핑 모터등을\n\r이용한 하드웨어 구성`}
                        num="0" 
                        img="/img/aduino.jpg"
                        path="/Progress"/>  
                    <SiteInfo title="웹페이지" 
                        text={`§ FRONT-END\nREACT.js (HTML, CSS, JAVASCRIPT) 이용\r\n§ BACK-END\nSPRING FRAMEWORK (JAVA) 이용 `} 
                        num="1" 
                        img="/img/html.jpg"/>  
                    <SiteInfo title="모니터링" 
                        text={`BACK-END에서 아두이노의 값을 받고 화면에 출력해준다.\n웹페이지를 통해 특정 동작을 통해 \nBACK단으로 값을 보내 아두이노를 동작시킨다.`} 
                        num="2" 
                        img="/img/monitoring.jpg"
                        path="/monitering" />  
                    <SiteInfo title="자동물류" 
                        num="3"  
                        img="/img/auto.jpg"
                        path="/Progress/week1"
                        text={`물자의 취급, 운반, 저장, 반출을\n자동화하는 시스템`}/>  
                </div>
                <div className="home-bbs-free">
                    3.
                </div>                
            </div>
        );
    }
}
export default Home;