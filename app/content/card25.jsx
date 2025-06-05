import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card25 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/36/f3/2e/36f32e507e53328f04d81a41718f4f49.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Desembaraço correto: menos quebra e mais saúde
                </Text>
                <Text style={styles.description}>
                    Pentear os cabelos de forma inadequada, especialmente quando molhados, pode causar danos estruturais e quebra.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Antes de pentear, aplique um creme de pentear ou leave-in para criar uma camada protetora.{"\n"}
                    - Use pentes de dentes largos ou escovas específicas para desembaraçar, como a "escova de desembaraço" ou "tangle teezer".{"\n"}
                    - Comece sempre das pontas, subindo gradualmente até a raiz, evitando forçar os fios.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Menos quebra e formação de nós.</Text>{"\n"}
                    <Text style={styles.bold}>2. Fios mais alinhados e macios.</Text>{"\n"}
                    <Text style={styles.bold}>3. Redução do frizz.</Text>
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2D2FF',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        padding: 20,
        margin: 16,
        width: '90%',
        maxWidth: 360,
    },
    image: {
        width: 290,
        height: 300,
        marginBottom: 16,
        borderRadius: 70,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F96380',
        marginTop: 16,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#4A4A4A',
        textAlign: 'justify',
        marginBottom: 10,
        lineHeight: 24,
    },
    bold: {
        fontWeight: 'bold',
        color: '#F96380',
    },
});

export default Card25;
