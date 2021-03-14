import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = 'Taif';
  return (
    <View>
      <Text style={styles.textStyle}>This is {name}</Text>
      <Text style={styles.subHeaderStyle}>How are you everyone?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
  },
  subHeaderStyle: {
    fontSize: 24,
  },
});

export default ComponentScreen;
