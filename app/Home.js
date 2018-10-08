/**
This is the container for the notes app
*/

import React, {Component} from 'react';
import {View} from 'react-native';
import Title from './Title';
import Notes from './Notes';
import Footer from './Footer';
import styles from './Styles';

export default class Home extends Component{ 
    render(){
        return (
        <View style={styles.home}>
            <Title />
            <Notes />
            <Footer />
        </View>
        );
    }
}