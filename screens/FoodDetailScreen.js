import React, { useState, useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import Rating from '../components/Rating';
import Comment from '../components/Comment';
import { MaterialIcons } from '@expo/vector-icons';

const FoodDetailScreen = ({ route, navigation }) => {
  const { foodItem } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 15 }}>
          <TouchableOpacity
            style={styles.cartIconContainer}
            onPress={() => navigation.navigate('Cart')}
          >
            <MaterialIcons name="shopping-cart" size={22} color="#2ecc71" />
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.cartIconContainer}
              onPress={() => navigation.navigate('Profile')}
            >
              <MaterialIcons name="person" size={22} color="#2ecc71" />
            </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const { addToCart } = useContext(CartContext);
  
  const [rating, setRating] = useState(foodItem.rating);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: 'User1', text: 'This was delicious!', rating: 5 },
    { id: '2', user: 'User2', text: 'Good but a bit salty', rating: 3 },
  ]);

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Date.now().toString(),
        user: 'CurrentUser',
        text: comment,
        rating: rating,
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{foodItem.name}</Text>
      <Text style={styles.category}>{foodItem.category}</Text>
      <Text style={styles.price}>${foodItem.price.toFixed(2)}</Text>
      
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{foodItem.description}</Text>
      
      <Text style={styles.sectionTitle}>Nutritional Information</Text>
      <Text style={styles.description}>Calories: 450, Protein: 25g, Carbs: 30g, Fat: 20g</Text>
      
      <Text style={styles.sectionTitle}>Rating</Text>
      <Rating 
        rating={rating} 
        onRate={setRating} 
        editable={true}
      />
      
      <Text style={styles.sectionTitle}>Add Your Review</Text>
      <TextInput
        style={styles.commentInput}
        placeholder="Write your review here..."
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <Button title="Submit Review" onPress={handleAddComment} />
      
      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      {comments.map((item) => (
        <Comment key={item.id} comment={item} />
      ))}
      
      <TouchableOpacity 
        style={styles.addToCartButton}
        onPress={() => addToCart(foodItem)}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 80,
  },
  addToCartButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartIconContainer: {
    marginRight: 15,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 50,
    elevation: 3,
  },
});

export default FoodDetailScreen;