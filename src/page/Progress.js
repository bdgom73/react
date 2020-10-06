import React, { Component } from 'react';
import  WeekNav from '../comonents/WeekNav'
import {MainWeek} from '../shared/index';
import { Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    week1_1,
    week1_2,
    week1_3,
    Weektwo1,
    Weektwo2,
    WeekThree1,
    WeekThree2,
    WeekThreeVideo, Week4_1,
    Week4_2,Week4_3,Week5_1,Week5_2,
    Week6_1,Week6Video,Week7_2,Week7_1,
    Week7_3,
    Week7Video,Week8_1,Week8_2,Week8_3,
    Week8_4,Week8_5,Week8_6,Week8_7,Week8_8
} from '../shared/pubilc';


class Progress extends Component{
    constructor(props){
        super(props);
        this.state = {
            opacity :"1",
            scrollvalue:''
      }
    }
    getWeekPage= ()=>{
        const path="/Progress/week";
        var week =[Week1,Week2,Week3,Week4,Week5,Week6,Week7,Week8];
        const save = [];
        for(var i = 0 ; i < 8 ; i++){
            save[i] = <Route exact path={path+(i+1)} component={week[i]}/>
        }
        return save;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
        
    }

    shouldComponentUpdate(){
        const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
        (top > -312) && (document.getElementsByClassName("upContent")[0].style.opacity=0);
        (top < -312) && (document.getElementsByClassName("upContent")[0].style.opacity=1);
        return true;
    }

    onScroll = (e)=>{
        const scrollTop = ('scroll',e.srcElement.scrollingElement.scrollTop);
        this.setState({scrollvalue :  scrollTop})
    }
    render(){   
        document.title = `자동물류창고-진행도`
        return(
            <div>                 
                <div class="upContent" style={{opacity:"0"}} onClick={e=>{e.preventDefault(); window.scrollTo({top:0,left:0,behavior:'smooth'});}}  ></div>
                <div class="main_img">
                    <div class="m1">
                        <span class="cr">A</span>utomated <br/>
                        <span class="cr">S</span>torage <br/>
                            and <br/>
                        <span class="cr">R</span>etrieval&nbsp;
                        <span class="cr">S</span>ystem
                       
                    </div>
                </div>
                <div class="content">
                    <content>
                        <WeekNav></WeekNav>   
                        <div class="content_wrap">                      
                            <Switch>
                                <Route exact path="/Progress" component={MainWeek}/>
                                {this.getWeekPage()}
                            </Switch>
                            
                        </div>
                        <div class="aside_right_wrap">
                         
                        </div>     
                    </content>
                </div>
            </div>
        );
    }
    
}

class Week1 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week1`
        return(
            <div class="projWeekmain">     
                    <div class="h1"><span class="weekstart">l</span>1주차</div>
                    <div class="proj1">
                        <h2 class="h2">팀 과제선정</h2>
                           <p class="weekn_p">
                                프로젝트 실습
                                팀 과제는 자동물류창고를 선택했다.
                                자동물류창고중 어떠한 것을 구현할 것인가에 대해 회의하다가
                                자동으로 적재/출고를 할 수 있는 자동화 기계를 구현하기로 결정했다.
                            </p>
                    </div>
                    <div class="proj2">
                       <h2 class="weekn_h2">팀 사전조사</h2>
                       <div class="weekn_content_type1">
                            <img src={week1_1} alt="자동물류창고 이미지1" class="weekn_img hss"/>
                                <p>
                                    시작은 컨베이어 벨트를 이용해 물류이동을 하는 방향으로 정했지만
                                    다음과 같이 원하는 위치에 자동으로 적재/출고 할 수 있는 형식이
                                    더 부합하다는 결론이 났다.
                                </p>
                        </div>
                        <div class="weekn_content_type1">
                            <img src={week1_2} alt="자동물류창고 이미지2"  class="weekn_img"/>
                            <p>
                                사전조사중 최근에는 더 발전된 자동창고가 있다는것을
                                알게되었다. 다음 사진과같이 <span>z축이 위가 아닌 아래쪽
                                즉 바닥에 적재할 수 있는 방식이 더 공간활용에서
                                효율적</span>일 것이다라는 생각을 했고, 이 부분을 간단하게
                                제작해보고자 하였다. 
                            </p>
                        </div>  
                    </div>
                    <div class="proj2">
                        <h2 >개발일정계획</h2>
                        <div>
                            <img src={week1_3} alt="개발일정이미지" class="weekn_img"/>
                        </div>
                    </div>
                </div>
          );
        }
}


class Week2 extends Component{
 
    render(){
        document.title = `자동물류창고-진행도-week2`
        return(
            <div class="projWeekmain">     
                    <div class="h1"><span class="weekstart">l</span>2주차</div>
                    <div class="proj1">
                        <h2 class="h2">스테핑모터</h2>
                           <p class="weekn_p">
                                스테핑 모터는 디지털 신호로 직접 제어할 수 있으므로,
                                마이크로 컴퓨터와의 접속이 용이하고, 위치결정하는 제어에는
                                빠질 수 없는 모터이다. 
                            </p>
                            <p class="weekn_p">
                            o 장점 <br/>
                            피드백이 불필요해 회로를 단순화 시킬 수 있고, 정지시에
                            토르크 유지가 가능하며, 유지관리 및 보수가 쉽다.<br/>
                            o 단점 <br/>
                            에너지 효율이 나쁘며, 공진현상을 일이킬 우려가 있다.
                            </p>
                    </div>
                    <div class="proj2">
                       <h2 class="weekn_h2">스테핑모터 테스트</h2>
                       <div class="weekn_content_type1">
                            <img src={Weektwo1} alt="자동물류창고 이미지1" class="weekn_img"/>
                                <p>
                                현재 테스트가 가능한 스테핑모터의 필요 전압은 24V이기 때문에 
                                전원 공급 장치를 통해 24V를 가해주었다.
                                </p>
                        </div>
                        <div class="weekn_content_type1">
                            <img src={Weektwo2} alt="자동물류창고 이미지2"  class="weekn_img"/>
                            <p>
                            스테핑모터의 단점이 너무 크게 느껴졌다. 일반 DC모터의 비해
                                발열이 심했다. 모터가 구동하지 않은 상태일 때 모터를 움직이지 못하게
                                꽉 잡고 있어야 해 더 많은 열이 발생하는 것으로 보인다.
                            </p>
                        </div>  
                    </div>
                    <div class="proj2">
                        <h2>소프트웨어</h2>
                        <p class="weekn_p">
                                웹 사이트를 만들어, 진행 사항을 기록하고, 모니터링 또한 
                                웹 사이트를 통해 모니터링 시스템을 만들기로 하였다.
                            </p>
                            <h3 class="weekn_h3">사용할 언어 및 프로그램</h3>
                            <p class="weekn_p">
                                HTML,CSS,React,Spring boot, MySQL등
                            </p>
                    </div>
                </div>
        );

    }
}
class Week3 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week3`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>3주차</div>
                <div class="proj1">
                        <h2 class="weekn_h2">내용</h2>
                            <p class="weekn_p">
                                근접센서를 이용하여 값을 받아 작동시키는 방식을 사용하기로 하였다.
                                근접센서를 동작시키기 전 비슷한 센서인 초음파 센서를 통해 테스트하였다.    
                            </p>
                            <p class="weekn_p">
                                초음파센서<br/>
                                사람의 귀에 들리지 않을 정도로 높은 주파수의 소리인 초음파가 가지고 있는
                                특성을 이용한 센서이다. 초음파는 공기가 액체, 고체에 사용할 수 있다.
                                초음파 센서에 이용되는 파장은 매체의 음속과 음파의 주파수에 따라 결정된다.
                                그 중에서 초음파 거리계를 이용하여 측정하였다.
                            </p>
                   </div>
                   <div class="proj2">
                       <h2 class="weekn_h2">초음파센서</h2>
                       <div class="weekn_content_type1">
                                <img src={WeekThree1} alt="초음파센서"  class="weekn_img"/>
                                <p>
                                    초음파(소리) 센서를 이용하여 범위 내에 사물을 감지하여 거리를 측정한다.
                                    초음파의 특성상 날씨나 초음파가 닿는 벽의 재질등에 따라 약간의 오차가 발생한다.

                                </p>
                        </div>
                       
                        <div class="weekn_content_type1">
                                <img src={WeekThree2} alt="초음파센서반응"  class="weekn_img" style={{width:"500px"}} />                        
                            <p>
                                거리에 따라 계속해서 값이 출력이 되는 것을 확인할 수 있었다. 하지만 
                                특정 거리안의 물체가 접근했을 때를 감지하기 위해 측정 범위를 10cm이하로 잡아
                                10cm이하로 위치가 감지될 때만 값을 출력하게 변경하였다. 그리고 값을 받는 딜레이 시간을
                                줄여 더 순간 시간도 값을 측정할 수 있게 하였다.
                            </p>
                        </div>  
                      
                    </div>
                    <div class="proj2">
                        <h2 class="weekn_h2">테스트결과</h2>
                        <div class="weekn_video">
                            <video src={WeekThreeVideo} controls class="weekn_video"/>
                        </div>
                    </div>
                </div>
        );

    }
}
class Week4 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week4`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>4주차</div>
            <div class="proj1">
                <h2 class="h2">내용</h2>
                   <p class="weekn_p">
                   HTMl과 CSS를 이용하여 웹 페이지 구성을 시작했다.<br/>
                        기본적으로, PC와 모바일 모두 편하게 이용할 수 있도록
                        반응형 웹으로 제작방향을 잡았다.
                        웹페이지 제작의 이유는 제작 과정을 쉽게 확인하고,
                        모니터링 시스템을 사용하기 위함이다.
                    </p>
            </div>
            <div class="proj2">
               <h2 class="weekn_h2">테스트 제작과정</h2>
               <div class="weekn_content_type1">
               <img src={Week4_1} alt="초음파센서" class="weekn_img" />
                        <p>
                        간단한 코드를 입력해 HTML로 기초적인 구조를 잡고 간단한 웹페이지를 제작해보았다.
                        제이쿼리 모바일이 아닌 HTML과 CSS, JS 등을 통해 구현할 준비를 시작했다.
                        </p>
                </div>
                <div class="weekn_content_type1">
                    <img src={Week4_2} alt="초음파 이미지2"  class="weekn_img"/>
                    <p>
                    CSS는 웹 문서의 전반적인 스타일을 미리 저장해 둔 스타일 시트이다.
                        HTML은 웹 문서를 다양하게 설계하고 수시로 변경하는데 많은 제약이 있다. 그렇기에
                        이를 보완하기 위해 만들어진 것이다.
                    </p>
                </div>  
            </div>
            <div class="proj2">
                <h2 >4주차 최종 결과</h2>
                <img src={Week4_3} alt="초음파 이미지3" class="weekn_img"/>
                <p class="weekn_p">
                        각 기능들을 한번씩 코딩해보며 익숙해 지는 시간이었다.
                        HTML과 CSS를 이용해 반응형 웹 페이지를 제작하여 PC나 단말기기 등
                        사이즈가 다른 전자기기에서 더 편리하게 사용하도록 설계하고 JS를 통해 동적인 홈페이지를 만드는 것이 최종 목표이다.
                    </p>
            </div>
        </div>
        );

    }
}
class Week5 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week5`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>5주차</div>
            <div class="proj1">
                <h2 class="h2">내용</h2>
                    <p class="weekn_p">
                        스태핑 모터를 아두이노 우노, 브레드보드, EasyDriver를 통해
                        더 정확한 사용방법을 익히고 사용하기 위해 다시한번
                        재 테스트 하였다.
                     </p>
            </div>
            <div class="proj2">
               <h2 class="weekn_h2">스테핑 모터제어</h2>
               <div class="weekn_content_type1">
               <img src={Week5_1} alt="모터이미지" class="weekn_img" />
               <p class="weekn_p"> 
                        준비물 : 아두이노 우노, 브레드보드, EasyDriver, 점퍼선 등 <br/>
                     </p>
                     <h3 class="weekn_h3">제어 전 연결</h3>
                     <p class="weekn_p">
                        o 모터의 네 개의 선을 EasyDriver에 연결, 12V(24V)의 전원도 연결 <br/>
                        o EasyDriver의 그라운드를 아두이노의 그라운드와 연결 <br/>
                        o 아두이노 우노의 포트를 EasyDriver 에 연결하여 모터제어 <br/>
                     </p>
                </div>
            
            </div>
            <div class="proj2">
                <h2 >5주차 결과</h2>
                <img src={Week5_2} alt="모터 이미지" class="weekn_img" style={{width:"200px"}}/>
                    <p class="weekn_p">
                        한 스텝씩 스테핑 모터를 돌려보고,<br/>
                        delay 값을 변화시켜 모터의 회전 속도 또한 조절해 보았다.<br/>
                    </p>
               
            </div>
        </div>
        );

    }
}
class Week6 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week6`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>6주차</div>
            <div class="proj1">
                <h2 class="h2">내용</h2>
                    <p class="weekn_p">
                    스테핑 모터를 초음파 센서를 통해 값을 받아 동작시키는 테스트를 진행하였다.
                        이번 프로젝트에서 메인이 되는 동작 실험이다.
                     </p>
            </div>
            <div class="proj2">
               <h2 class="weekn_h2">스테핑 모터제어</h2>
               <div class="weekn_content_type1">
               <img src={Week6_1} alt="모터이미지" class="weekn_img" />
               <p class="weekn_p"> 
                        준비물 : 아두이노 우노, 브레드보드, EasyDriver, 점퍼선, 초음파센서 <br/>
                     </p>
                     <h3 class="weekn_h3">순서</h3>
                     <p class="weekn_p">
                        1. 초음파 센서를 아두이노 우노와 연결 <br/>
                        2. 초음파 센서의 값을 받아오는지 테스트<br/>
                        3. 스테핑 모터, EasyDriver 그리고 아두이노 우노 연결<br/>
                        4. 스테핑 모터의 임의의 값을 넣어 작동 테스트<br/>
                        5. 초음파 센서를 통해 값을 받아 그 값을 통해 스테핑 모터 제어
                     </p>
                </div>
            
            </div>
            <div class="proj2">
                <h2 >6주차 결과</h2>
                <p class="weekn_p">
                        3차의 테스트 결과를 토대로 10cm 이하로 값이 초음파 센서를 통해 감지되면
                        스테핑모터가 돌아가는 테스트가 성공적으로 진행되었다.
                    </p>
                    <div class="weekn_video">
                        <video src={Week6Video} controls class="weekn_video_file1" style={{width:"500px",height:"500px"}}/>
                    </div>
               
            </div>
        </div>
        );

    }
}
class Week7 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week7`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>7주차</div>
            <div class="proj1">
                <h2 class="h2">내용</h2>
                    <p class="weekn_p">
                    아두이노와 시리얼 통신을 통해 웹 페이지에서 LED 동작제어 테스트를
                        진행하였다.
                     </p>
            </div>
            <div class="proj2">
               <h2 class="weekn_h2">아두이노 제어</h2>
               <div class="weekn_content_type1">
               <img src={Week7_1} alt="초음파,스테핑" class="weekn_img" />
               <p class="weekn_p"> 
                        준비물 : 아두이노 우노, 브레드보드, EasyDriver, 점퍼선, 초음파센서 <br/>
                     </p>
                     <h3 class="weekn_h3">아두이노 코드</h3>
                     <img src={Week7_2} alt="초음파,스테핑" class="weekn_img" />
                     <h3 class="weekn_h3">시리얼통신 코드</h3>
                     <img src={Week7_3} alt="초음파,스테핑" class="weekn_img" />
            </div> 
            </div>
            <div class="proj2">
                <h2 >결과</h2>
                    <p class="weekn_p">
                        웹 페이지의 value 값이 버튼을 통해 입력되면 console창의 출력이되며,<br/>
                        LED가 동작하게된다.
                    </p>
                    <div class="weekn_video">
                        <video src={Week7Video} controls class="weekn_video_file1" style={{width:"100%"}}/>
                    </div>
               
            </div>
        </div>
        );

    }
}
class Week8 extends Component{
    render(){
        document.title = `자동물류창고-진행도-week8`
        return(
            <div class="projWeekmain">     
            <div class="h1"><span class="weekstart">l</span>8주차</div>
            <div class="proj1">
                <h2 class="h2">내용</h2>
                    <p class="weekn_p">
                        HTML과 CSS, JavaScript를 이용해 간단한 보고서용
                        홈페이지를 제작하였다.
                        메인페이지의 HTML코드와 CSS코드를 게시하고자한다.
                    </p>
            </div>
            <div class="proj2">
               <h2 class="weekn_h2">코드</h2>
               <div class="weekn_content_type1">
                     <h3 class="weekn_h3">HTML Header</h3>
                     <img src={Week8_1} alt="초음파,스테핑" class="weekn_img"/> 
                     <h3 class="weekn_h3">HTML Contents</h3>     
                     <img src={Week8_2} alt="초음파,스테핑" class="weekn_img"/>
                     <h3 class="weekn_h3">HTML Footer</h3>    
                     <img src={Week8_3} alt="초음파,스테핑" class="weekn_img" />
                     <h3 class="weekn_h3">CSS</h3>
                     <img src={Week8_4} alt="초음파,스테핑" class="week8img" />
                     <img src={Week8_5} alt="초음파,스테핑" class="week8img" />
                     <img src={Week8_6} alt="초음파,스테핑" class="week8img" />
                     <img src={Week8_7} alt="초음파,스테핑" class="week8img" />
                     <img src={Week8_8} alt="초음파,스테핑" class="week8img" />

         
            </div> 
            </div>
            <div class="proj2">
                <h2 >결과</h2>
                <h3 class="weekn_h3">Header부분</h3>
                <p class="weekn_p"> 
                   img태그를 통해 로고를 삽입하고,<br/>
                   a태그를 통해 지정된 웹페이지로 경로이동을 설정하였다. <br/>
                   ul,li태그를 통해 nav의 코드를 정리하였다.
                </p>
                <h3 class="weekn_h3">Content부분</h3>
                <p class="weekn_p"> 
                  HTML를 통해 웹페이지로 나타내고자 하는 핵심 내용을 정리하였다.
                  또한 CSS를 통해 사용자가 더 편하게 볼 수 있게 디자인 하였다.
                </p>
                <h3 class="weekn_h3">Footer부분</h3>
                <p class="weekn_p"> 
                    웹페이지의 정보를 보여주는 부분이다. 
                    이 웹페이지의 목적, 제출처, 연락처등을 게시하였다.
                </p>
                   
               
            </div>
        </div>
        );

    }
}
export default Progress;