import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card24 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/79/40/80/7940803bd6385476a804baad9e63d0b8.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Técnica LOC: máxima retenção de hidratação para cabelos secos e cacheados
                </Text>
                <Text style={styles.description}>
                    LOC é a sigla para Líquido, Óleo e Creme, uma sequência de aplicação que ajuda a manter a hidratação no interior do fio por mais tempo.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Com os fios úmidos, aplique um líquido hidratante (água ou tônico capilar).{"\n"}
                    - Em seguida, passe um óleo vegetal leve para selar a umidade.{"\n"}
                    - Finalize com um creme de pentear ou leave-in, garantindo proteção e definição.
                </Text>

                <Text style={styles.sectionTitle}>✅ Indicado para:</Text>
                <Text style={styles.description}>
                    ➡ Cabelos cacheados, ondulados e crespos.{"\n"}
                    ➡ Fios muito ressecados ou porosos.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Hidratação prolongada.</Text>{"\n"}
                    <Text style={styles.bold}>2. Redução de frizz e ressecamento.</Text>{"\n"}
                    <Text style={styles.bold}>3. Definição natural e duradoura.</Text>
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
        width: 280,
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

export default Card24;
