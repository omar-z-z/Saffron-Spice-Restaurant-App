import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = (paymentMethod) => {
    Alert.alert(
      'Order Confirmed',
      `Your order has been placed with ${paymentMethod} payment. Total: $${totalPrice.toFixed(2)}`,
      [
        { text: 'OK', onPress: () => {
          clearCart();
          navigation.navigate('Home');
        }}
      ]
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity 
            style={styles.shopButton}
            onPress={() => navigation.navigate('Menu')}
          >
            <Text style={styles.shopButtonText}>Browse Menu</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem 
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            )}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
            
            <Text style={styles.paymentTitle}>Select Payment Method:</Text>
            <View style={styles.paymentButtons}>
              <TouchableOpacity 
                style={styles.paymentButton}
                onPress={() => handleCheckout('Cash')}
              >
                <Text style={styles.paymentButtonText}>Pay with Cash</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.paymentButton, styles.visaButton]}
                onPress={() => handleCheckout('Visa')}
              >
                <Text style={styles.paymentButtonText}>Pay with Visa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 15,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 15,
  },
  paymentTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  paymentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  visaButton: {
    backgroundColor: '#1a237e',
  },
  paymentButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CartScreen;