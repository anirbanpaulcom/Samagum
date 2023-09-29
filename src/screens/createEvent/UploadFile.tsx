import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MediaLibrary, Permissions } from 'react-native-media-library';
import Svg from '../../assets/svg';

const UploadFile = ({ onFileSelected }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Request permission to access the media library
    const requestPermission = async () => {
      const permission = await Permissions.requestMediaLibraryPermissions();
      if (permission === 'granted') {
        // Access granted, you can now pick files
        pickFile();
      }
    };

    requestPermission();
  }, []);

  const pickFile = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync();
      if (assets.length > 0) {
        const selectedFile = assets[0].uri;
        setSelectedFile(selectedFile);
        onFileSelected(selectedFile);
        console.log(selectedFile, "ooooooooooooooo");
      } else {
        console.log('No files found in the media library');
      }
    } catch (error) {
      console.error('Error picking file from media library:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickFile} style={styles.fileContainer}>
        <Svg.UploadFilledIcon />
        <Text style={styles.BrowseFile}>Browse File</Text>
        {selectedFile && (
          <Text style={styles.selectedFileName}>Image chosen</Text>
        )}
      </TouchableOpacity>
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
