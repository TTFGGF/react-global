import React, { Component } from 'react';

class BaseComponent extends Component{

    constructor(props){
        super(props);
        this.getAttribute = this.getAttribute.bind(this);
    }

    getAttribute(){
        let style = {};
        if(this.props.fontSize){
            style = {fontSize:this.props.fontSize * window.devicePixelRatio};
        }

        return style;
    }

    getWebAttribute(){
        
    }

}

module.exports = BaseComponent;