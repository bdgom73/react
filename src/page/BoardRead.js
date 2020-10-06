import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Boardread extends Component{
    constructor(props){
        super(props);
        this.state = {
            board : {
            },
            allBoard : []

        }
      }
    loadingData = async ()=>{

        try {
            var bid = {
                bnum : this.props.match.params.boardId
            }
            var res = await Axios.post("/read", bid)   
            var res2 = await Axios.get("/board/free")        
                this.setState({
                    board : res.data,
                    allBoard : res2.data
                })    
                document.getElementsByClassName('ql-editor')[0].innerHTML = res.data.contents;
        } catch (error) {
           console.log(error);
        } 
            
            
    
    }
    componentDidMount() {
         const { loadingData } = this; 
         loadingData();
         document.title = `자동물류창고-${this.state.board.title}`
    }
    render(){
        const {board} = this.state;
        if(board === null){
            return "존재하지 않거나 삭제된 게시글 입니다.";
        }else{
            return(
                <>
                <div className="freeboardImg"/>
                
                
                <div>
                    <div className="Readtable">                     
                        
                        <div  className="readTitleUser">
                            {board.title}

                            <div className="ReadTr">
                            <div className="readid">No.{board.id}  </div>
                            <div className="readnameUser">작성자 : {board.userid}</div>                          
                            <div className="readview">조회수 1</div>
                            <div  className="readdate">작성일 ({board.nowdate})</div>
                        </div>
                        </div>
                         
                    </div>    
                    <div className="Readtable">
                      
                            <div  className="ql-editor"></div>
                       
                    </div>
                    <Link to="/board/write">글쓰기</Link>
                </div>
                <div>
                    
                </div>
                </>
            );
        }
        
    }
}
export default Boardread;