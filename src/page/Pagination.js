import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemCount : this.props.totalPost,
            itemSize : this.props.pageSize,           
        }
      }
    render(){
        const {itemCount,itemSize} = this.state;
        const pageCount = Math.ceil(itemCount/itemSize);
        if(pageCount===1) return null;
        const pages = _.range(1, pageCount + 1);

        return(
            <nav>
                <ul className="pagination">
                   {pages.map(page =>{
                       <li key={page} >
2
                       </li>
                   })}
                </ul>
            </nav>
        );
    }
}
export default Pagination;