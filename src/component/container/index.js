import React, { Component } from 'react';
import classnames from 'classnames'
import 'flex.css/dist/data-flex.css';

const s = {
    height:window.innerHeight
}

class Container extends Component{

    constructor(props){
        super(props);
        this.getFlex = this.getFlex.bind(this);
        this.getAttribute = this.getAttribute.bind(this);
    }

    getFlex(){
        let flex = '';
        if(this.props.flexDirection){
            switch (this.props.flexDirection){
                case 'column':
                    flex = 'dir:top';
                    break;
                case 'row':
                    flex = 'dir:left';
                    break;
                case 'column-reverse':
                    flex = 'dir:bottom';
                    break;
                case 'row-reverse':
                    flex = 'dir:right';
                    break;
            }
        }
        if(this.props.justifyContent){
            switch (this.props.justifyContent){
                case 'flex-start':
                    flex = classnames(flex,"main:left");
                    break;
                case 'flex-end':
                    flex = classnames(flex,"main:right");
                    break;
                case 'space-between':
                    flex = classnames(flex,"main:justify");
                    break;
                case 'center':
                    flex = classnames(flex,"main:center");
                    break;
            }
        }
        if(this.props.alignItems){
            switch (this.props.alignItems){
                case 'flex-start':
                    flex = classnames(flex,"cross:top");
                    break;
                case 'flex-end':
                    flex = classnames(flex,"cross:bottom");
                    break;
                case 'center':
                    flex = classnames(flex,"cross:center");
                    break;
            }
        }
        return flex;
    }

    getAttribute(){
        let style = {};
        if(this.props.fill){
            style = {height:window.innerHeight};
        }
        if(this.props.borderWidth){
            // style.borderWidth = ((this.props.borderWidth / window.devicePixelRatio) / window.fontSize) + 'rem';
            style.borderWidth = ((this.props.borderWidth) / window.fontSize) + 'rem';
            style.borderStyle = "solid";
        }
        if(this.props.borderColor){
            style.borderColor = this.props.borderColor;
            style.borderStyle = "solid";
        }
        if(this.props.borderStyle){
            style.borderStyle = this.props.borderStyle;
        }
        if(this.props.backgroundColor){
            style.backgroundColor = this.props.backgroundColor;
        }
        if(this.props.width){
            if(this.props.width > window.innerWidth){
                style.width = (window.innerWidth / window.fontSize) + 'rem';
            }
            else{
                // style.width = ((this.props.width / window.devicePixelRatio) / window.fontSize) + 'rem';
                style.width = ((this.props.width) / window.fontSize) + 'rem';
            }
            // style.width = this.props.width;
            // console.log((this.props.width));
            // console.log((window.fontSize));
        }
        if(this.props.height){
            // style.height = ((this.props.height / window.devicePixelRatio) / window.fontSize) + 'rem';
            style.height = ((this.props.height) / window.fontSize) + 'rem';
            // style.height = this.props.height;
        }
        // console.log(window.fontSize);
        // console.log(style);
        return style;
    }

    render(){
        let flex = this.getFlex();
        let style = this.getAttribute();
        return (
          <div data-flex={flex} data-flex-box={this.props.flex} style={style}>
              {this.props.children}
          </div>
        );
    }

}

module.exports = Container;