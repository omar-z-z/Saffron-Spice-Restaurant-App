import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryItem from '../components/CategoryItem';

const categories = [
  { id: '1', name: 'Seafood', image: require('../assets/images/seafood.jpg') },
  { id: '2', name: 'Sandwiches', image: require('../assets/images/sandwiches.jpg') },
  { id: '3', name: 'Main Dishes', image: require('../assets/images/main_dishes.jpg') },
  { id: '4', name: 'Soups', image: require('../assets/images/soups.jpg') },
  { id: '5', name: 'Appetizers', image: require('../assets/images/appetizers.jpg') },
  { id: '6', name: 'Drinks', image: require('../assets/images/drinks.jpg') },
  { id: '7', name: 'Salads', image: require('../assets/images/salads.jpg') },
  { id: '8', name: 'Grilled Meats', image: require('../assets/images/grilled_meats.jpg') },
  { id: '9', name: 'Pastries', image: require('../assets/images/pastries.jpg') },
  { id: '10', name: 'Desserts', image: require('../assets/images/desserts.jpg') },
];

const MenuScreen = ({ navigation }) => {
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Menu</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Category', { categoryName: item.name })}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartButtonText}>🛒 Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
  cartButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  cartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartIconContainer: {
    marginRight: 15,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 50,
    elevation: 3,
  },
});

export default MenuScreen;