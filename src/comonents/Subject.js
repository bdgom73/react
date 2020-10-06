import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../shared/pubilc'

class Subject extends Component{
    render(){
        return(
            <div>          
                <NavLink exact to = "/" >
                    <img src={logo} alt="로고이미지" title="과제홈페이지" class="header-logo"/>
                </NavLink>
            </div>
        );
    }
}
export default Subject;