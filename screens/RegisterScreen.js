import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    register(email, password, name);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Join Saffron & Spice</Text>
      <Text style={styles.headerSubtitle}>
        Create your account to start ordering our authentic Middle Eastern dishes!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name (e.g. Omar Zuhri)"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        textContentType="name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address (e.g. you@example.com)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password (min. 8 characters)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="newPassword"
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginLinkContainer}
      >
        <Text style={styles.link}>
          Already registered?{' '}
          <Text style={styles.linkHighlight}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3b2f2f',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#5a4a4a',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontSize: 12,
  },
  registerButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginLinkContainer: {
    marginTop: 16,
  },
  link: {
    color: '#5a4a4a',
    textAlign: 'center',
    fontSize: 14,
  },
  linkHighlight: {
    color: '#2ecc71',
    fontWeight: '600',
  },
});

export default RegisterScreen;
