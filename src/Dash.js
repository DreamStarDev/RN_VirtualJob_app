import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';

export default class Dash extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            behavior="padding">
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <View style={styles.image}>
                            <Image source={require('../assets/employee.png')}/>
                        </View>
                        <View style={styles.jobResult}>
                            <Text style={styles.jobResultText}>10,000 Job holders are</Text>
                            <Text style={styles.jobResultText}>successfully working by</Text>
                            <Text style={styles.jobResultText1}>VIRTUALJOBS.IN</Text>
                        </View>
                        <View style={styles.email}>
                            <TextInput style={styles.emailText}></TextInput>
                        </View>
                        <View style={styles.verify}>
                            <Text style={styles.verifyText}>All the resumes are </Text>
                            <Text style={styles.verifyText}>not verified, </Text>
                            <Text style={styles.verifyText}>Verification process should </Text>
                            <Text style={styles.verifyText}> be done by the Employers</Text>
                        </View>
                        <View style={styles.explain}>
                            <Text style={styles.explainText}>On clicking submit button </Text>
                            <Text style={styles.explainText}>you will receive to resumes of </Text>
                            <Text style={styles.explainText}>the employees to your email ID</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.touchSubmit}>
                                <Text style={styles.textSubmit}>Submit</Text>
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#30abf8',
    },

    subContainer: {
        width: '93%',
        height: '97%',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    email: {
        width: '80%',
    }, 

    emailText: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#30abf8',
    },

    jobResult: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },

    jobResultText: {
        color: '#30abf8',
        fontSize: 20,
    },

    jobResultText1: {
        color: '#30abf8',
        fontSize: 25,
    },

    verify: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    verifyText: {
        color: '#EB5656',
        fontSize: 21,
    },

    explain: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    explainText: {
        color: '#30abf8',
        fontSize: 15,
    },

    button: {
        width: '90%',
        alignItems: 'center',
    },

    touchSubmit: {
        width: '100%',
        backgroundColor: '#30ABF8',
        borderRadius: 15,
        width: '60%',
        alignItems: 'center',
        marginBottom: 25,
    },

    textSubmit: {
        color: '#FFFFFF',
        fontSize: 20,
        padding: 10,
    },

    image: {
        width: '100%',
        minHeight: 190,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
});