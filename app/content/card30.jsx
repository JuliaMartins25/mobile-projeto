import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card30 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/0d/ae/99/0dae998e278d6f6b4c984add9df89bc7.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Controle de Oleosidade com Shampoos Específicos
                </Text>
                <Text style={styles.description}>
                    A oleosidade excessiva é um dos principais desafios para quem tem cabelos curtos e masculinos. Isso ocorre devido à maior atividade das glândulas sebáceas, principalmente em homens jovens e adultos. O uso de shampoos específicos para controle de oleosidade é essencial para manter o couro cabeludo limpo, saudável e livre de caspa e seborreia.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Escolha um shampoo com ativos como zinco, ácido salicílico ou extratos botânicos adstringentes (ex.: chá verde, hamamélis).{"\n\n"}
                    - Lave o cabelo em dias alternados para evitar o efeito rebote, que aumenta a produção de óleo.{"\n\n"}
                    - Massageie bem o couro cabeludo com as pontas dos dedos, promovendo uma limpeza eficaz, mas sem agressividade.{"\n\n"}
                    - Enxágue completamente para não deixar resíduos que podem obstruir os folículos.{"\n\n"}
                    - Finalize com condicionador apenas nas pontas, se os fios estiverem ressecados.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Redução da oleosidade sem ressecar os fios.</Text>{"\n"}
                    <Text style={styles.bold}>2. Prevenção de caspa, dermatite seborreica e queda capilar.</Text>{"\n"}
                    <Text style={styles.bold}>3. Sensação de limpeza e leveza prolongada.</Text>
                </Text>

                <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
                <Text style={styles.description}>
                    Evite água muito quente, que estimula ainda mais a produção de sebo. Prefira água morna ou fria.
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

export default Card30;
