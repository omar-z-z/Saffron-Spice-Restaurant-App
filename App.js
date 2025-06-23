import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

console.log('NavigationContainer:', NavigationContainer);
console.log('AppNavigator:', AppNavigator);
console.log('AuthProvider:', AuthProvider);
console.log('CartProvider:', CartProvider);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer> 
          <AppNavigator />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
