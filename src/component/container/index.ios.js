import React, { Component } from 'react';

import {
    View,
    PixelRatio
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
              borderWidth:this.props.borderWidth/PixelRatio.get(),
              borderColor:this.props.borderColor,
              borderStyle:this.props.borderStyle,
              backgroundColor:this.props.backgroundColor,
              width:this.props.width/PixelRatio.get(),
              height:this.props.height/PixelRatio.get()
                }}
               >
              {this.props.children}
          </View>
        );
    }

}

module.exports = Container;