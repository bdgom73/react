import React, { Component } from 'react';
// import queryString from 'query-string';

class Test extends Component{
    
    // Testquery(){
    //     const query = queryString.parse(this.props.location.search);

    //     const detail = query.detail === 'true';

    //     return(
    //         detail && 'detail : blahblah'
    //     )
    // }
    render(){
        return(
            <div>
                <h1>테스트 홈</h1>
                <span>
                    테스트 페이지입니다.<br/>
                    {this.props.match.params.name}
                </span>     
            </div>
        );
    }
}
export default Test;