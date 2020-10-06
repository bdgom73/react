import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Menu extends Component{
    render(){
        const activeStyle = {
            color : 'green',
            fontSize : '1.1em',
            
        }
        return(
            <div class="mainNav">
                <ul>    
                    <li class="prsubnav">
                        <NavLink to = "/Progress" activeStyle={activeStyle}>진행도</NavLink>
                        <ul class="subnav">
                            <li><NavLink to = "/Progress/week1" className="progresssubnav">1학기</NavLink></li>
                            <li>2학기</li>
                        </ul>
                    </li>      
                    <li ><NavLink to = "/monitering" activeStyle={activeStyle}>모니터링</NavLink></li>
                    <li ><NavLink to = "/board/free" activeStyle={activeStyle}>자유게시판</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default Menu;