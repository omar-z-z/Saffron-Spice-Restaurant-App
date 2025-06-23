import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Rating = ({ rating, onRate, editable = false }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {stars.map((star) => (
        <TouchableOpacity 
          key={star} 
          onPress={() => editable && onRate(star)}
          disabled={!editable}
        >
          <Icon 
            name={star <= rating ? 'star' : 'star-border'} 
            size={24} 
            color={star <= rating ? '#FFD700' : '#aaa'} 
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default Rating;