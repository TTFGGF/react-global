import React, { Component } from 'react';

import BaseComponent from '../base/BaseComponent'

class Text extends BaseComponent{

    constructor(props){
        super(props);
        // this.getAttribute = this.getAttribute.bind(this);
        // console.log(this.getAttribute());
    }

    // getAttribute(){
    //     let style = {};
    //     if(this.props.fontSize){
    //         style = {fontSize:this.props.fontSize};
    //     }
    //     return style;
    // }

    render(){
        // console.log(this.props.fontSize);
        let style = this.getAttribute();
        console.log(style);
        return(
            <div style={style}>
                {this.props.children}
            </div>
        );
    }

}

module.exports = Text;