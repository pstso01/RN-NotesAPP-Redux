/**
 * Component to display the Title of the note
 */
import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles';

class TitleComp extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        return (
            <View>
                <Text style={styles.text}>Title</Text>
                
                <TextInput style={styles.titleTextInput} onChangeText={this.onChange} value={this.props.input}>

                </TextInput>
            </View>
        );
    }

    onChange = function(text){
        this.props.dispatch({type: 'TITLE_CHARS_COUNT', data: text});
    }
}

const Title = connect(function(state, props){
    return {
        input: state.title
    }
})(TitleComp);

export default Title;