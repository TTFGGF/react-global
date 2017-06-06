import React, { Component } from 'react';

import Container from '../src/component/container/index'
import XBText from '../src/component/Text'
import Text from '../src/component/text/index'

class ContainerTest extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container
                flexDirection="column"
                flex={9}
                fill
                >
                <Container
                    flex={3}
                    borderWidth={10}
                    borderColor="#000000"
                    backgroundColor="#2bcc8f"
                    width={750}
                    height={100}
                    >
                    <Text fontSize={20}>1</Text>
                </Container>
                <Container flex={3}>
                    <Text>2</Text>
                </Container>
                <Container flex={3}>
                    <Text>3</Text>
                </Container>
            </Container>
        );
    }

}

module.exports = ContainerTest;