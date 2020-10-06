import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

class Freeboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            board : [], 
            totalPost : 0,  
            pageSize : 20, 
            activePage : 1, 
             
        }
      }

   
    loadingData = async ()=>{
        try {
            const res = await Axios.get("/board/free");
            this.setState({
                board : res.data,
                totalPost : res.data.length
            })
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount() {
         const { loadingData } = this; 
         loadingData();
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }
    
    postCheck = ()=>{
        if(this.state.board.length === 0){
            return(
                <tr>
                    <td colSpan="5" style={{textAlign:"center" , padding:"20px", fontSize:"15px", fontWeight:"700"}}>게시물이 존재하지 않습니다.</td>
                </tr>
            );
        }
    }
    render(){     
        const {board,pageSize,activePage} = this.state; 
        const xend = pageSize * activePage;
        const xstart = xend - (pageSize);
        const pageBoard = board.slice(xstart,xend);   
        return(
            <>
            <div className="freeboardImg"/>
            <div class="boardSubject"><div>자유게시판</div></div>    
            <div className="board">
                <table>
                    <tr className="boardTr">
                        <th className="boardId">번호</th>
                        <th className="boardTitle">제목</th>
                        <th className="boardDate">작성자</th>
                        <th className="boardName">등록일</th>
                        <th className="boardName">조회수</th>
                    </tr>
                    {this.postCheck()}
                    {pageBoard.map((board=>{
                       return(
                        <tr key={board.id} className="boardTr">  
                                <td className="boardId">{board.id}</td>      
                                <td className="boardTitle"><Link to={"/board/free/"+board.id+"/"+board.title}>{board.title}</Link></td>                          
                                <td className="boardName">{board.userid}</td>
                                <td className="boardDate">{board.nowdate}</td>  
                                <td className="boardName">1</td>
                        </tr>
                        
                        );}))}               
                </table>
                <div className="writego">
                    <button type="button" className="writego_under"><Link to="/board/write">글쓰기</Link></button>
                </div>
                <div>
                    <Pagination
                        activeLinkClass="Linka"
                        activeClass="Linkitem"
                        innerClass="pagination"
                        itemClass="itempage"
                        firstPageText="처음"
                        lastPageText="마지막"
                        nextPageText="다음"
                        prevPageText="이전"
                        hideDisabled
                        activePage={this.state.activePage}
                        itemsCountPerPage={pageSize}
                        totalItemsCount={this.state.totalPost}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
            </>
        );
        
       
    }
        
}

export default Freeboard;