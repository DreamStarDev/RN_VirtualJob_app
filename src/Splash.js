import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class Splash extends Component {

    render() {
        return (
        <View style={styles.container} >
            <TouchableOpacity>
                <Image  source={require('../assets/virtual_small.png')}/>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30ABF8'
  },
});