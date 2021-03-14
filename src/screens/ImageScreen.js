import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetails
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
