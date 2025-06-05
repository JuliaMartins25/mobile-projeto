import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card21 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/42/2a/fa/422afa362c1e68dcc141cf0eb200bce4.jpg' }}
                    style={styles.image}

                />
                <Text style={styles.title}>Massagem capilar estimulante para fortalecimento e crescimento</Text>
                <Text style={styles.description}>
                    A massagem no couro cabeludo é uma técnica simples, porém altamente eficaz para estimular o crescimento dos fios e fortalecer a raiz. Ela melhora a circulação sanguínea, aumentando o aporte de oxigênio e nutrientes aos folículos pilosos.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    -Lave as mãos e, com as pontas dos dedos, realize movimentos circulares suaves por todo o couro cabeludo.{"\n"}
                    -Dedique de 5 a 10 minutos à massagem, diariamente ou pelo menos três vezes por semana.{"\n"}
                    -Pode ser realizada a seco, antes do banho, ou durante a lavagem com shampoo, potencializando a limpeza e relaxando a musculatura.
                </Text>
                <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
                <Text style={styles.description}>
                    Potencialize a massagem com óleos essenciais, como o de alecrim ou hortelã-pimenta, diluídos em óleo vegetal. Eles ativam ainda mais a circulação e estimulam o crescimento.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Estimula o crescimento capilar.</Text>{"\n"}
                    <Text style={styles.bold}>2. Previne e reduz a queda.</Text>{"\n"}
                    <Text style={styles.bold}>3. Relaxa e alivia tensões, promovendo bem-estar.</Text>

                </Text>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2D2FF', // Fundo azul claro
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16, // Espaçamento interno
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16, // Bordas arredondadas
        shadowColor: '#000', // Sombra visível
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        padding: 20,
        margin: 16,
        width: '90%', // Responsividade
        maxWidth: 360, // Limite de largura
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
        color: '#333', // Cor escura para contraste
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
        textAlign: 'justify', // Justificado para melhor leitura
        marginBottom: 10,
        lineHeight: 24,
    },
    bold: {
        fontWeight: 'bold',
        color: '#F96380',
    },
});

export default Card21;