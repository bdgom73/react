import React, {Component} from 'react';
import { logo } from '../shared/pubilc'
import { NavLink } from 'react-router-dom';
class Footer extends Component{

    render(){
        return(
            <>
            <footer class="footer">
                <NavLink exact to="/">
                    <img src={logo} alt="로고이미지" class="footer_logo_img"/>
                </NavLink>    
                
                <div>
                <h2 class="fh2">웹페이지정보</h2>
                    <ol>
                        <li>홈페이지 목적 : 과제 제출용</li>
                        <li>제출처 : <a href="http://www.kopo.ac.kr/incheon/content.do?menu=7235" rel="noopener noreferrer" target="_blank">
                                        KOPO Incheon Campus DEP.IT
                                    </a>
                        </li>
                        <li>e-mail : <a href="mailto:bdgom73@naver.com" class="footer_a">bdgom73@naver.com</a></li>
                        <li>오류수정요청 : <a href="mailto:bdgom73@naver.com" class="footer_a">bdgom73@naver.com</a></li>
                        <li>한국폴리텍대학 인천캠퍼스 정보통신과 2-A 자동물류창고</li>
                    </ol>
                </div>
                <span class="copyright">Copyright in KimIlJoong</span>
            </footer>
            
            </>
        );
    }
}
export default Footer;