import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card28 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/1c/9a/4c/1c9a4c9273ca6c43cae3c9611f62dd33.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Corte regular: essencial para crescimento saudável e estética
                </Text>
                <Text style={styles.description}>
                    O mito de que cortar o cabelo impede o crescimento é equivocado. Cortar as pontas regularmente elimina partes danificadas, promovendo a saúde geral dos fios.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Realize cortes a cada 8 a 12 semanas, dependendo da saúde das pontas.{"\n"}
                    - Para quem deseja manter o comprimento, opte pelo "corte bordado", que remove apenas as pontas duplas.{"\n"}
                    - Para quem está em transição capilar, corte progressivamente as partes com química.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Prevenção de pontas duplas e quebra.</Text>{"\n"}
                    <Text style={styles.bold}>2. Cabelos mais saudáveis e bonitos.</Text>{"\n"}
                    <Text style={styles.bold}>3. Crescimento contínuo e uniforme.</Text>
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
        borderRadius: 12,
        marginBottom: 20,
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

export default Card28;
