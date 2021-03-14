import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.viewParentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewParentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'hotpink',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'lightblue',
    top: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'orangered',
  },
});

export default LayoutScreen;
