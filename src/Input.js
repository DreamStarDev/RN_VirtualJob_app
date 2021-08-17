import React, {Component} from 'react';
import {StyleSheet, View,  TextInput, Text} from 'react-native';

export default class Input extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <TextInput value={this.props.value} placeholder={this.props.plafo} name={this.props.name} style={styles.myInput} onChangeText={value => this.props.handle(this.props.name,value)}></TextInput>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#30ABF8',
    borderWidth: 2,
    margin: 7,
    shadowOpacity: 150,
    shadowColor: '#30ABF8',
    width: '90%',
  },

  title: {
      color: '#30ABF8',
      paddingTop: 10,
      paddingLeft:10,
  },

  myInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 8,
  }

});