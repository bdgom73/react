import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class WeekNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAct : '',
            onClicked : 'true'
        }
    }
    SelectWeek(){
        var weekNav = [];
        for(var i = 1; i < 9 ; i++){
            weekNav[i]= <li className="sel-weeks"><NavLink to ={"/Progress/week"+i} pathWeek ={this.state.isAct} class="weeks" onClick={()=>{window.scrollTo(0,590)}}>{ i+"차" }</NavLink></li>
        }
        return weekNav;
    }
    componentDidMount(){
        this.setState({isAct:this.SelectWeek()})
    }
    render(){
        return(
            <div class="WeekNav">    
                <div><div class="spanStyle" onClick={
                    ()=>{    
                        if(this.state.onClicked === 'true'){
                            this.setState({isAct : this.SelectWeek() , onClicked : 'false'});
                        }else if(this.state.onClicked === 'false'){
                            this.setState({isAct : '', onClicked:'true'});
                        }   
                    }  
                }>1학기</div></div>
                <ul>
                {this.state.isAct}
                </ul>
                
            </div>
        );
    }
    
}
export default WeekNav;