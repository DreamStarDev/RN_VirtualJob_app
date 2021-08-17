import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class Img extends Component {

    componentDidMount() {
        
    }

    render() {
        const type = this.props.type;
        if (type == 0) {
            return (
                <View
                    style={styles.container}>
                    <Image
                        source= {require('../assets/template0.png')}
                        style={styles.image} />
              </View>
              
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Image
                        source= {require('../assets/template1.png')}
                        style={styles.image} />
                </View>
              
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 2
    },
    
    imageView: {
        height: '100%',
        padding: 10
    },

    textView: {
        padding: 10,
        height: '10%',
    },

    text: {
        fontSize: 20,
        width: '100%',
        height: '100%',
        color: '#30abf8'
    }
});