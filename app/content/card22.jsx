import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card22 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/b9/b7/d2/b9b7d29ba2ae6d1d3e45042807b2f77d.jpg' }}
                    style={styles.image}

                />
                <Text style={styles.title}>Uso de fronha de cetim ou seda: proteção contra frizz e quebra</Text>
                <Text style={styles.description}>
                O atrito constante do cabelo com tecidos ásperos, como o algodão, causa frizz, quebra e formação de nós. As fronhas de cetim ou seda são aliadas indispensáveis para quem busca preservar a saúde dos fios durante o sono.
                </Text>
                <Text style={styles.sectionTitle}>Como usar:</Text>
                <Text style={styles.description}>
                    -Troque a fronha de algodão por uma de cetim ou seda, preferencialmente de boa qualidade, com trama bem fechada.{"\n"}
                    -Ideal para todos os tipos de cabelo, mas especialmente para cacheados, ondulados e crespos, que sofrem mais com frizz e ressecamento.{"\n"}
                    -Para melhores resultados, combine com touca de cetim ou turbante noturno.
                </Text>
                
                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Reduz significativamente o frizz.</Text>{"\n"}
                    <Text style={styles.bold}>2. Previne quebra e embaraçamento.</Text>{"\n"}
                    <Text style={styles.bold}>3. Mantém a definição dos cachos e o penteado por mais tempo.</Text>{"\n"}
                    <Text style={styles.bold}>4. Conserva a hidratação natural dos fios.</Text>
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
        marginBottom: 16,
        borderRadius: 70,
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

export default Card22;