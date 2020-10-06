import React, { Component } from 'react';
import week1_1 from '../../img/weekimg/week1_1.PNG'
import week1_2 from '../../img/weekimg/week1_2.PNG';


class Week1 extends Component{

    render(){
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
                            <img src={week1_1} alt="자동물류창고 이미지1" class="weekn_img"/>
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
                            <img src="../../img/progress_img_footer.JPG" alt="개발일정이미지" class="progress_img"/>
                        </div>
                    </div>
                </div>
    );
        }
}


export default Week1;