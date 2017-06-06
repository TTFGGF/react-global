import React, { Component } from 'react';

import {
    Text
} from 'react-native';

class Index extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Text style={{fontSize:this.props.fontSize}}>{this.props.children}</Text>
        );
    }

}

module.exports = Index;