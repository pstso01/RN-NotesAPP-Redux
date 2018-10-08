/**
 * Component for the notes to be entered
 */

import {TextInput, Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Styles';

class NotesComp extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        return (
            <View>
                <Text style={styles.text}>Notes</Text>
                <TextInput style={styles.notesTextInput} multiline={true} onChangeText={this.onChange}>
                </TextInput>
            </View>
        );
    }

    onChange = function(text){
        this.props.dispatch({type: 'COUNT_CHARS', data: text});
    }
}

const Notes = connect()(NotesComp);

export default Notes;