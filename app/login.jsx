import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Adicione o hook useNavigation do React Navigation

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário ou email"
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
          <Link href="/" style={styles.buttonText}>
            Entrar
          </Link>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => navigation.navigate('register')}
        >
          <Text style={styles.signupText}>
            Não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>

      </View>
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
  forgot: {
    color: '#cc3366',
    fontSize: 14,
    marginBottom: 18,
    textAlign: 'center',
    textDecorationLine: 'underline',
    opacity: 0.8,
  },
  signup: {
    backgroundColor: '#ADD8E6',
    width: '100%',
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  signupText: {
    color: '#fff',
    fontSize: 15,
  },
  signupLink: {
    color: '#cc3366',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});