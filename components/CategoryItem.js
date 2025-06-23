import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryItem;