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
                <Text style={styles.title}>5 receitas caseiras que te ajudarão a ter um cabelo saudável</Text>
                <Text style={styles.description}>
                   Hidratar e nutrir os fios em casa é possível! Experimente receitas simples como máscara de abacate, umectação com óleo de coco, hidratação com babosa, esfoliação do couro cabeludo com açúcar e tônico de alecrim. 
                    Essas receitas naturais ajudam a fortalecer, dar brilho e estimular o crescimento saudável dos cabelos.
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