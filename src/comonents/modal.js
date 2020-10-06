import React, {Component} from 'react';
import "../css/modal_style.css"
class Modal extends Component{
    
    deleteScroll = ()=>{
        document.getElementsByTagName("body")[0].style.overflow="hidden"
    }
    componentDidMount(){
        this.deleteScroll();
    }
    render(){
        return(
            <>           
                <div className="modal_warp">             
                    <div className="modal">
                        <div className="modal_close" onClick={()=>{
                            this.props.useClose ? this.props.onClose() : window.history.back();
                            document.getElementsByTagName("body")[0].style.overflow="auto"
                        }}/>
                        <div className="modal_title">
                            {this.props.title ? this.props.title : "404 NOT FOUND"}
                        </div>
                        <div class="modal_contents">
                            <pre>{this.props.text ? this.props.text : ""}</pre>
                        </div>
                        
                       
                    </div>
                </div>
            </>
        );
    }
}
export default Modal;