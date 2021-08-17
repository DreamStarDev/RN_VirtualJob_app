import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, View, ScrollView} from 'react-native';
import Img from './Img';
import Content from './Content';
import BtnGroup from './btnGroup';

export default class Navigation extends Component {

  constructor (props) {
    super(props);
    this.state = {
      type : 0,
    }

    this.handler = this.handler.bind(this);
  }

  handler(type) {
    this.setState ({
      type: type
    });
  }

    render() {
        return (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            behavior="padding">
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Img type={this.state.type}/>
              </View>
              <View style={styles.btnContainer}>
                <BtnGroup handler={this.handler}/>
              </View>
              <View style={styles.content}>
                <Content navigation={this.props.navigation} type={this.state.type}/>
              </View>
            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 0,
    flex: 1,
    backgroundColor: '#30abf8',
    flexDirection: 'column',
  },

  imageContainer: {
    width: '100%',
    height: '40%',
    minHeight: 270,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#FFF7F7F7',
    borderRadius: 5,
  },

  btnContainer: {
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: '#30abf8',
    flex: 1,
  },

  content: {
    width: '100%',
    height: '53%',
    backgroundColor: '#FFF7F7F7',
    borderRadius: 5
  }


});