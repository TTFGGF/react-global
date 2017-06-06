import React, { Component } from 'react';

import {
    View
} from 'react-native';

class Container extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={{
              flexDirection:this.props.flexDirection,
              justifyContent:this.props.justifyContent,
              alignItems:this.props.alignItems,
              flex:this.props.flex,
              borderWidth:this.props.borderWidth/2,
              borderColor:this.props.borderColor,
              borderStyle:this.props.borderStyle,
              backgroundColor:this.props.backgroundColor,
              width:this.props.width/2,
              height:this.props.height/2
                }}
            >
                {this.props.children}
            </View>
        );
    }

}

module.exports = Container;