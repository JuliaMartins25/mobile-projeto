import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Número de celular ou email"
          placeholderTextColor="#b88"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#b88"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#b88"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { marginBottom: 0, flex: 1 }]}
            placeholder="Senha"
            placeholderTextColor="#b88"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword((prev) => !prev)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#b88"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OU</Text>
        <View style={styles.separatorLine} />
      </View>

      <Text style={{ color: '#b88', fontSize: 15, marginBottom: 8, textAlign: 'center' }}>
        Já possui uma conta?
      </Text>
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}
      >
        <Ionicons name="log-in-outline" size={20} color="#cc3366" style={{ marginRight: 8 }} />
        <Text style={styles.loginButtonText}>Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 200,
    marginTop: 20,
    marginBottom: 26,
    resizeMode: 'contain',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 18,
    elevation: 3,
    borderWidth: 1.5,
    borderColor: '#cc3366',
    shadowColor: '#cc3366',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  loginButtonText: {
    color: '#cc3366',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
    justifyContent: 'center',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#b88',
    marginHorizontal: 8,
    opacity: 0.5,
  },
  separatorText: {
    color: '#b88',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.7,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 18,
    padding: 24,
    elevation: 4,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 14,
  },
  eyeButton: {
    position: 'absolute',
    right: 14,
    padding: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ADD8E6',
    width: '100%',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    shadowColor: '#90caf9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 1,
  },
});