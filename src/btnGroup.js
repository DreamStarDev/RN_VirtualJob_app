import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelect1: true,
            showSelect2: false,
        };

        this.onPressEmployee = this.onPressEmployee.bind(this);
        this.onPressEmployeer = this.onPressEmployeer.bind(this);
        this._renderSelect = this._renderSelect.bind(this);
    }

    onPressEmployee() {
        this.setState({
            showSelect1: true,
            showSelect2: false
        })
        this.props.handler(0);
    }

    onPressEmployeer() {
        this.setState({
            showSelect1: false,
            showSelect2: true
        })
        this.props.handler(1);
    }

    _renderSelect (id) {
        var show = 0;
        if (id == 0) {
            show = this.state.showSelect1;
        } else {
            show = this.state.showSelect2;
        }
        if (show) {
            return (
                <Image source={require('../assets/select.png')}/>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View
                style={styles.container}>
                    <View style={styles.view}>
                        <TouchableOpacity
                            style={styles.touch}
                            onPress={() => this.onPressEmployee()}>
                            <Text
                                style={styles.text}>Employee</Text>
                        </TouchableOpacity>
                        {this._renderSelect(0)}
                    </View>
                    <Text
                        fontSize= {20}
                        style={styles.text} >|</Text>
                    <View style={styles.view}>
                        <TouchableOpacity
                            style={styles.touch}
                            onPress={() => this.onPressEmployeer()}>
                            <Text
                                style={styles.text}>Employeer</Text>
                        </TouchableOpacity>
                        {this._renderSelect(1)}
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 2,
        flexDirection: 'row',
    },

    view: {
        width: '50%',
        height: '95%',
        alignItems:'center',
    },

    touch: {
        width: '100%',
        height: '80%',
        backgroundColor: '#30abf8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#FFFFFF',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    }
});