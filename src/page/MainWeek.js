import React, { Component } from 'react';

class MainWeek extends Component{

    render(){
     
        return(   
                    <div class="main_content_table">
                        <h2 class="table_type1_h2">프로젝트 계획서</h2>
                        <table class="content_table_type_1">
                            <tr>
                                <th>학과</th>
                                <td>정보통신과</td>
                                <th class="table_th_no">반</th>
                                <td>A</td>
                            </tr>
                            <tr>
                                <th>과제명</th>
                                <td colspan="3">자동물류창고</td>
                            </tr>
                            <tr>
                                <th>팀원명단</th>
                                <td colspan="3">강희정, 김신영, 김주영, 김일중, 한재호, 마광희</td>
                            </tr>
                            <tr>
                                <th>추진일정</th>
                                <td colspan="3">2020년 5월 11일 ~ 2020년 11월 15일 (15주)</td>
                            </tr>
                            <tr>
                                <th>과제개요</th>
                                <td colspan="3">본 과제는 물품을 넣을 장소를 구성하고 틀 위에 자동화 기계를 배치하여 사람의 힘을 들이지 않고
                                    원하는 물품을 기계가 적재/출고하는 시스템 구성이 1차적인 목표이고, 기계와 컴퓨터 간 통신을 통하여 
                                    모니터링을 구축하는것이 2차적 목표이다.
                                </td>
                            </tr>
                            <tr>
                                <th>과제의 <br/>기술적 동향</th>
                                <td colspan="3"><span>국내외 동향</span> <br/>
                                    o 창고실행시스템은 정보통신 기술을 바탕으로 창고 자동화 설비를 시스템화, 주문된 상품이 오류 없이
                                    고객에게 신속/정확하게 전달될 수 있도록 지원한다. <br/>
                                    o 창고실행시스템은 운송관리시스템이나 전자데이터 교환과 접목되어 도착시간 또는 도크 도어 할당 변경을
                                    통해 작업속도와 우선순위를 역동적으로 조정한다
                                </td>
                            </tr>
                            <tr>
                                <th>과제의 <br/>활용 분야</th>
                                <td colspan="3">Auto Store는 노르웨이 물류솔류션 업체인 하테랜드에서 개발한 설비로
                                    유럽 온라인 마켓 강자인 OKADO와 미국 월마트 계열사로 영국에서 두번째로 큰 슈퍼마켓 체인인
                                    ASDA등에서 성능이 검증 되었다.
                                </td>
                            </tr>
                            <tr>
                                <th> 최종목표</th>
                                <td colspan="3">o 최종보고서 (2부) <br/>
                                    o 회로도면/외형도면 <br/>
                                    o 제작된 모형
                                </td>
                            </tr>
                        </table>
                    </div>
               
        );
    }
}

export default MainWeek;

