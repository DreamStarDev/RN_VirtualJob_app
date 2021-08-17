import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import Input  from './Input';
import DocPicker from './DocPicker';

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: "",
            resume: "",
            skill: "",
            name: "",
            email_id: "",
        }

        this.handleChange= this.handleChange.bind(this);
        this.fileManage= this.fileManage.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.goToDash = this.goToDash.bind(this);
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
    }

    goToDash() {
        this.props.navigation.navigate('Dash');
    }

    onSubmit() {
        
        if (this.props.type == 0) {
            if (this.state.role.length == 0) {
                alert("Input your role correctly.");
            } else if( this.state.resume.length == 0 ) {
                alert("Input your resume correctly.");
            } else {
                fetch('https://jobs.analogit.in/api/admin/add-employee', {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        role: this.state.role,
                        resume: this.state.resume,
                    })
                })
                .then((response) => alert("Your resume is successfully uploaded.."))
                .catch((error) => {
                    alert("Sorry, retry to upload your resume..");
                });
            }    
        } else {
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email_id) === false){
                alert("Email address is invalid");
            } else if (this.state.name.length == 0) {
                alert("Input your name correctly.");
            } else if (this.state.skill.length == 0) {
                alert("Input skill set correctly.");
            } else{
                fetch('https://jobs.analogit.in/api/admin/add-employer', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email_id,
                        skill: this.state.skill
                    })
                })
                .then((response) => this.goToDash())
                .catch((error) => {
                    console.log(error);
                });
            }
        }
        
    }

    fileManage = (value) => {
        this.setState({['resume']: JSON.stringify(value)});
    }

    render() {
        const type = this.props.type;

        if (type == 0) {
            return (
                <View style={styles.container}>
                    <Input value={this.state.role} plafo="Digital Marketing, Hotel Management, etc." title="Enter Your Role" name="role" handle={this.handleChange}></Input>
                    <DocPicker fileManage={this.fileManage}/>
                    <TouchableOpacity style={styles.touchSubmit} onPress={this.onSubmit}>
                        <Text style={styles.textSubmit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Input value={this.state.name} plafo="Enter name" title="Name" name="name" handle={this.handleChange}></Input>
                    <Input value={this.state.email_id} plafo="Enter email" title="Email Id" name="email_id" handle={this.handleChange}></Input>
                    <Input value={this.state.skill} plafo="Digital Marketing, Hotel Management" title="Skill Set" name="skill" handle={this.handleChange}></Input>
                    <TouchableOpacity style={styles.touchSubmit} onPress={this.onSubmit}>
                        <Text style={styles.textSubmit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF7F7F7',
        borderRadius: 5,
    },

    touchSubmit: {
        backgroundColor: '#30ABF8',
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
        margin: 10,
    },

    textSubmit: {
        color: '#FFFFFF',
        fontSize: 20,
        padding: 10,
    },

    inputItem: {
        width: '80%',
    }
});