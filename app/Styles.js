/**
 * Styles for the app
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    home: {
        top: 20,
        padding: 30
    },
    notesTextInput:{
        height: 100,
        width: '90%',
        marginBottom: 10,
        backgroundColor: 'rgba(0,0,0,.05)',
        alignContent: 'flex-start'      
    },
    text:{
        marginBottom: 10
    },
    titleTextInput:{
        height: 30,
        width: '90%',
        alignContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,.05)',
        textAlignVertical: 'top',
        marginBottom: 10      
    },


});

export default styles;