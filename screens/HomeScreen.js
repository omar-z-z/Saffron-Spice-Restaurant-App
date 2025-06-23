import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const homeImage = require('../assets/images/home_page_image.jpg');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={homeImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Saffron & Spice{"\n"}Authentic Flavors Await</Text>
        <Text style={styles.subtitle}>Discover Delicious Middle Eastern Cuisine</Text>
        <Text style={styles.subtitle}>
          Enjoy a rich variety of freshly prepared dishes — from juicy grills to flavorful rice, savory stews, and authentic street food. Order now and satisfy your cravings!
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.textButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.textButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.textButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', justifyContent: 'space-between' },

  imageContainer: {
    height: '45%',
    backgroundColor: '#2ecc71',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 150,
    overflow: 'hidden',
  },

  textContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2ecc71',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    lineHeight: 20,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  textButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: '#2ecc71',
  },
  textButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
