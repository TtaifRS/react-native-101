import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textOneStyle}>Child no 1</Text>
      <Text style={styles.textTwoStyle}>child no 2</Text>
      <Text style={styles.textThreeStyle}>child no 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'darkblue',
    padding: 4,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'darkblue',
    padding: 4,
    alignSelf: 'flex-start',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'darkblue',
    padding: 4,
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'darkblue',
    padding: 4,
    flex: 1,
    alignSelf: 'flex-end',
  },
});

export default BoxScreen;
