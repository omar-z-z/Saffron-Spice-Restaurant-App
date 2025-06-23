import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from './Rating';

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{comment.user}</Text>
      <Rating rating={comment.rating} editable={false} />
      <Text style={styles.text}>{comment.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  user: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginTop: 5,
  },
});

export default Comment;