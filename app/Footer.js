/**
 * Component for footer
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class FooterComp extends Component{
    render(){
        return(
            <View>
                <Text>Characters: {this.props.charCount}</Text>
            </View>
        );
    }
}

const Footer = connect(function(state, props){
    return ({charCount: state.charCount});
})(FooterComp);

export default Footer;
