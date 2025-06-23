import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FoodItem from '../components/FoodItem';
import { MaterialIcons } from '@expo/vector-icons';

const foodItems = {
  Seafood: [
    {
      id: '1',
      name: 'Sayadiya Fish',
      price: 18.99,
      description: 'Spiced white fish served over fragrant rice with caramelized onions',
      category: 'Seafood',
      rating: 4.6
    },
    {
      id: '2',
      name: 'Grilled Hammour',
      price: 22.50,
      description: 'Red grouper marinated in lemon, garlic & za’atar, grilled to perfection',
      category: 'Seafood',
      rating: 4.7
    },
    {
      id: '3',
      name: 'Shrimp Tagine',
      price: 19.75,
      description: 'Tiger shrimp slow-cooked in tomato & harissa sauce with peppers',
      category: 'Seafood',
      rating: 4.5
    },
    {
      id: '4',
      name: 'Calamari Kebabs',
      price: 16.00,
      description: 'Skewered squid rings marinated in olive oil, lemon & sumac',
      category: 'Seafood',
      rating: 4.3
    }
  ],

  Sandwiches: [
    {
      id: '5',
      name: 'Chicken Shawarma Wrap',
      price: 7.99,
      description: 'Thinly sliced marinated chicken with garlic sauce & pickles in pita',
      category: 'Sandwiches',
      rating: 4.4
    },
    {
      id: '6',
      name: 'Falafel Sandwich',
      price: 6.50,
      description: 'Crispy chickpea patties with tahini, tomato, cucumber & parsley',
      category: 'Sandwiches',
      rating: 4.5
    },
    {
      id: '7',
      name: 'Beef Kebab Sandwich',
      price: 8.75,
      description: 'Grilled minced beef kebab, lettuce, tomato & toum in Arabic bread',
      category: 'Sandwiches',
      rating: 4.2
    },
    {
      id: '8',
      name: 'Halloumi & Veggie Wrap',
      price: 7.25,
      description: 'Grilled halloumi, roasted peppers, zucchini & mint yogurt sauce',
      category: 'Sandwiches',
      rating: 4.3
    }
  ],

  'Main Dishes': [
    {
      id: '9',
      name: 'Kabsa',
      price: 14.99,
      description: 'Saudi spiced chicken & rice with almonds, raisins & house blend kabsa spices',
      category: 'Main Dishes',
      rating: 4.6
    },
    {
      id: '10',
      name: 'Maqluba',
      price: 13.50,
      description: 'Layered rice, eggplant & meat cooked together then flipped upside-down',
      category: 'Main Dishes',
      rating: 4.7
    },
    {
      id: '11',
      name: 'Mansaf',
      price: 16.99,
      description: 'Jordanian lamb in fermented yoghurt sauce served over jareesh wheat',
      category: 'Main Dishes',
      rating: 4.8
    },
    {
      id: '12',
      name: 'Moussaka',
      price: 12.75,
      description: 'Baked eggplant & minced lamb in tomato sauce, topped with béchamel',
      category: 'Main Dishes',
      rating: 4.4
    }
  ],

  Soups: [
    {
      id: '13',
      name: 'Lentil Soup (Shorbat Adas)',
      price: 5.25,
      description: 'Red lentils simmered with cumin, turmeric & a squeeze of lemon',
      category: 'Soups',
      rating: 4.5
    },
    {
      id: '14',
      name: 'Harira',
      price: 6.50,
      description: 'Moroccan soup of chickpeas, lentils, tomatoes & fresh herbs',
      category: 'Soups',
      rating: 4.6
    },
    {
      id: '15',
      name: 'Shorbat Jarjeer',
      price: 5.75,
      description: 'Watercress soup blended with potatoes, onions & Arabic spices',
      category: 'Soups',
      rating: 4.3
    },
    {
      id: '16',
      name: 'Chicken Vermicelli Soup',
      price: 6.00,
      description: 'Clear broth with shredded chicken & thin Arabic vermicelli noodles',
      category: 'Soups',
      rating: 4.2
    }
  ],

  Appetizers: [
    {
      id: '17',
      name: 'Hummus',
      price: 4.99,
      description: 'Creamy chickpea dip with tahini, olive oil & fresh parsley',
      category: 'Appetizers',
      rating: 4.8
    },
    {
      id: '18',
      name: 'Baba Ghanoush',
      price: 5.25,
      description: 'Smoky roasted eggplant blended with tahini, garlic & lemon',
      category: 'Appetizers',
      rating: 4.6
    },
    {
      id: '19',
      name: 'Stuffed Vine Leaves',
      price: 6.50,
      description: 'Grape leaves filled with rice, pine nuts & herbs, drizzled with lemon',
      category: 'Appetizers',
      rating: 4.4
    },
    {
      id: '20',
      name: 'Kibbeh Nayyeh',
      price: 7.99,
      description: 'Levantine raw lamb mixed with bulgur, onions & spices (served chilled)',
      category: 'Appetizers',
      rating: 4.3
    }
  ],

  Drinks: [
    {
      id: '21',
      name: 'Ayran',
      price: 2.99,
      description: 'Chilled yogurt drink lightly salted and whisked to froth',
      category: 'Drinks',
      rating: 4.5
    },
    {
      id: '22',
      name: 'Jallab',
      price: 3.50,
      description: 'Date molasses drink with rose water, served with pine nuts & raisins',
      category: 'Drinks',
      rating: 4.4
    },
    {
      id: '23',
      name: 'Mint Lemonade',
      price: 3.25,
      description: 'Fresh lemon juice, mint leaves & a touch of sugar, shaken over ice',
      category: 'Drinks',
      rating: 4.6
    },
    {
      id: '24',
      name: 'Arabic Coffee',
      price: 2.50,
      description: 'Light roast coffee simmered with cardamom, served in small cups',
      category: 'Drinks',
      rating: 4.7
    }
  ],

  Salads: [
    {
      id: '25',
      name: 'Tabbouleh',
      price: 6.99,
      description: 'Finely chopped parsley, tomato, mint & bulgur with lemon-olive oil dressing',
      category: 'Salads',
      rating: 4.7
    },
    {
      id: '26',
      name: 'Fattoush',
      price: 6.50,
      description: 'Mixed greens & veggies tossed with crispy pita chips and sumac dressing',
      category: 'Salads',
      rating: 4.5
    },
    {
      id: '27',
      name: 'Beetroot Salad',
      price: 5.99,
      description: 'Roasted beets with garlic yogurt, walnuts & fresh herbs',
      category: 'Salads',
      rating: 4.3
    },
    {
      id: '28',
      name: 'Cucumber Tomato Salad',
      price: 5.50,
      description: 'Diced cucumber & tomato with mint, olive oil & a dash of pomegranate molasses',
      category: 'Salads',
      rating: 4.4
    }
  ],

  'Grilled Meats': [
    {
      id: '29',
      name: 'Lamb Kebab',
      price: 12.99,
      description: 'Skewered minced lamb seasoned with Arabic baharat, char-grilled',
      category: 'Grilled Meats',
      rating: 4.7
    },
    {
      id: '30',
      name: 'Shish Tawook',
      price: 11.50,
      description: 'Marinated chicken cubes in yogurt, lemon & garlic, grilled on skewers',
      category: 'Grilled Meats',
      rating: 4.6
    },
    {
      id: '31',
      name: 'Beef Kofta',
      price: 12.50,
      description: 'Ground beef & lamb mix with onions, parsley & spices, grilled to juicy perfection',
      category: 'Grilled Meats',
      rating: 4.5
    },
    {
      id: '32',
      name: 'Lamb Chops',
      price: 18.99,
      description: 'Tender lamb chops marinated in rosemary, garlic & za’atar',
      category: 'Grilled Meats',
      rating: 4.8
    }
  ],

  Pastries: [
    {
      id: '33',
      name: 'Sambousek (Meat)',
      price: 4.50,
      description: 'Fried pastry filled with spiced ground beef and pine nuts',
      category: 'Pastries',
      rating: 4.4
    },
    {
      id: '34',
      name: 'Spinach Fatayer',
      price: 4.00,
      description: 'Triangular pastry stuffed with seasoned spinach & onions',
      category: 'Pastries',
      rating: 4.3
    },
    {
      id: '35',
      name: 'Cheese Fatayer',
      price: 4.25,
      description: 'Baked pastry filled with a blend of akkawi & mozzarella cheeses',
      category: 'Pastries',
      rating: 4.5
    },
    {
      id: '36',
      name: 'Date Ma’amoul',
      price: 5.99,
      description: 'Shortbread cookie filled with a sweet date paste, lightly dusted with sugar',
      category: 'Pastries',
      rating: 4.6
    }
  ],

  Desserts: [
    {
      id: '37',
      name: 'Baklava',
      price: 6.99,
      description: 'Layers of phyllo dough with chopped pistachios & honey syrup',
      category: 'Desserts',
      rating: 4.8
    },
    {
      id: '38',
      name: 'Kunafa',
      price: 7.50,
      description: 'Shredded phyllo with sweet cheese, topped with syrup & crushed pistachios',
      category: 'Desserts',
      rating: 4.7
    },
    {
      id: '39',
      name: 'Basbousa',
      price: 5.75,
      description: 'Semolina cake soaked in rosewater-scented syrup with almonds',
      category: 'Desserts',
      rating: 4.5
    },
    {
      id: '40',
      name: 'Ma’amoul (Walnut)',
      price: 6.50,
      description: 'Buttery cookie filled with spiced walnut paste, lightly dusted with powdered sugar',
      category: 'Desserts',
      rating: 4.6
    }
  ]
};


const CategoryScreen = ({ route, navigation }) => {
  const { categoryName } = route.params;
  const items = foodItems[categoryName] || [];
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
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodItem 
            item={item} 
            onPress={() => navigation.navigate('FoodDetail', { foodItem: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
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

export default CategoryScreen;