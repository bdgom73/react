import React, {  Component } from "react";
import ReactQuill,{Quill} from 'react-quill';
import Axios from 'axios';
import Modal from "../comonents/modal"
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

class BoardWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents:"",  
    }
  }
  isModalhandler = (title,text,errorText,useClose)=>{  
    if(useClose === null) useClose = false;
    return <Modal title={title} text={text}  errorText={errorText} useClose={false}/>
  } 
  modules = {
    imageResize : {
      displaySize:true,
      modules: [ 'Resize', 'DisplaySize', 'Toolbar' ],

    },
    toolbar: [
      [{ 'header': [1,2,3,4, false]},
      {'size' : ['small',false,'large','huge']}],
      ['bold', 'italic', 'underline','strike', 'blockquote','code-block'],
      [{'color': [false,'red','blue','gray','skyblue','#222222']}],
      [{'background' : [false,'red']}],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image','video'],
      ['clean','ImageResize']
    ],
  }

  formats = [
    'header','size','color','background',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent','code-block',
    'link', 'image'
  ]

  render(){
      const {contents} = this.state  
      const {history}=this.props
      if(sessionStorage.getItem("uid") === null){
        return (
          <>
          {this.isModalhandler("Non Login Error","로그인 후 이용할 수 있습니다.")}
          </>  
        );
      }else{
      return (
        <div>
          { console.log(history)}
          <div class="editor">
          <div class="c-header"> <span class="s-header">l</span><span class="m-header">글쓰기</span></div>  
          <form onSubmit={(e)=>{
              e.preventDefault();
              const boardInfo = {
                token : sessionStorage.getItem("userInfo"),
                user : sessionStorage.getItem("uid"),
                title : e.target[0].value,
                contents : document.getElementsByClassName("ql-editor")[0].innerHTML,
              }
              Axios.post("/board/write",boardInfo)
                .then((res)=>{
                    if(res.status === 200){             
                      this.isModalhandler("작성 성공","게시글 작성에 성공하셨습니다.")
                      setTimeout(()=>{window.location.replace("/board/free")},1000)
                    }else{
                      this.isModalhandler("실패","게시글 작성에 실패하였습니다..")
                      setTimeout(()=>{window.history.go(0)},1000) 
                    }
                   
                }) 
                   
          }}>
          <input type="text" name="title" placeholder="제목을 입력해주세요" className="b-title" autocomplete="off"/>     
          <ReactQuill theme="snow" modules={this.modules}
          formats={this.formats}
          placeholder="글을 작성해주세요"
          />
  
          <button onClick={()=>{
              console.log(document.getElementsByClassName('ql-editor')[0].innerHTML = contents)
            document.getElementsByClassName('ql-editor')[0].innerHTML = contents
          }}>글저장</button>
          <input type="submit" value="글쓰기"/>
          </form>
          </div>
         
        </div>
 
      );
        }
      }
  }
    
// }
export default BoardWrite