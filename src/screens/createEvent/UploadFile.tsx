import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Svg from '../../assets/svg';

const UploadFile = ({ onFileSelected }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (!response.didCancel) {
        setSelectedFile(response);
      }
    });
  }, []);

  const selectFile = () => {
    const options = {
      title: 'Select Event Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => { // Use launchImageLibrary here
      if (response.didCancel) {
        console.log('User canceled file selection');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const selectedFile = response;

        setSelectedFile(selectedFile);

        onFileSelected(selectedFile);
        console.log(selectedFile,"ooooooooooooooo");
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={selectFile} style={styles.fileContainer}>
        <Svg.UploadFilledIcon />
        <Text style={styles.BrowseFile}>Browse File</Text>
      </TouchableOpacity>
      {selectedFile && (
        <Text style={styles.selectedFileName}>{selectedFile.fileName}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  BrowseFile: {
    fontSize: 14,
    fontWeight: '400',
    color: '#747688',
  },
  fileContainer: {
    borderWidth: 1,
    borderColor: '#B8B7C8',
    width: '100%',
    height: 130,
    backgroundColor: '#FAFAFA',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  selectedFileName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#120D26',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default UploadFile;
