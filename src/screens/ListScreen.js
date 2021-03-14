import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const ListScreen = () => {
  const friends = [
    { name: 'Chaity', age: '28' },
    { name: 'Sabbir', age: '27' },
    { name: 'Arif', age: '29' },
    { name: 'Tuntun', age: '30' },
    { name: 'Sumon', age: '29' },
    { name: 'Sami', age: '29' },
    { name: 'Shujoy', age: '27' },
    { name: 'Asif', age: '28' },
  ];
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
