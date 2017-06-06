
import XBText from '../src/component/Text'
import ContainerTest from '../example/ContainerTest'

import React, { Component } from 'react';

import {render} from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    render(
        <ContainerTest />
        , document.getElementById('root'))

});

// ReactDom.render(
//     <XBText />,
//     document.getElementById('root')
// );

// class Text extends Component{
//
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         return (
//           <div>qwdqw</div>
//         );
//     }
//
// }
//
// module.exports = Text;