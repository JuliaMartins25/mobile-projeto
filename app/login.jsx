import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Logo maior e mais para cima, sem fundo arredondado */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário ou email"
          placeholderTextColor="#b88"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#b88"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup}>
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
    justifyContent: 'flex-start', // logo mais para cima
    padding: 20,
  },
  // Removido o estilo title

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
    borderWidth: 1,
    borderColor: '#ffe0ec',

    shadowColor: '#e75480',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
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