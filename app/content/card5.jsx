import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Produtos capilares que você precisa testar!</Text>
                <Text style={styles.description}>
                   Conheça os produtos essenciais para manter seus cabelos saudáveis e bonitos: shampoos sem sulfato, máscaras de hidratação, óleos nutritivos, leave-in e finalizadores. 
                    Cada produto tem uma função específica e pode transformar a saúde dos seus fios. 
                    Teste diferentes opções e descubra quais se adaptam melhor ao seu tipo de cabelo!
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Card1;