import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const DocPicker = (props) => {


  const [ doc, setDoc ] = useState({});
  const pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
          if (response.type == 'success') {          
            let { name, size, uri } = response;
            let nameParts = name.split('.');
            let fileType = nameParts[nameParts.length - 1];

            var fileToUpload = {
              name: name,
              size: size,
              uri: uri,
              type: "application/" + fileType
            };

            props.fileManage(doc);
            setDoc(fileToUpload);
          } 
        });
  }

  return (      
      <View style={styles.container}>
        <Text style={styles.title}>Upload Your Resume</Text>
        <View style={styles.sectionStyle}>
          <TextInput editable={false} value={doc.name} style={styles.myInput} placeholder={'Upload your resume here...'} ></TextInput>
          <TouchableOpacity onPress={pickDocument}>
            <Image source={require('../assets/file_upload.png')} style={styles.imageStyle}/>
          </TouchableOpacity>
        </View>
      </View>    
  )
};

export default DocPicker;

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

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
  },

  title: {
      color: '#30ABF8',
      padding: 7
  },

  myInput: {
    width: '80%',
  },

  imageStyle: {
    height: 20,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

});