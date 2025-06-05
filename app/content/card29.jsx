import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card29 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/7d/a2/08/7da208f549c72ab750ffb2e56188805e.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Secagem rápida e saudável para o dia a dia
                </Text>
                <Text style={styles.description}>
                    No dia a dia corrido, muitos homens recorrem à secagem rápida com toalha ou ao ar livre. Porém, a forma incorreta de secar os fios pode causar frizz, quebra e agressão ao couro cabeludo. A secagem adequada preserva a saúde capilar e melhora a aparência dos fios.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Após o banho, pressione suavemente os fios com uma toalha de microfibra ou algodão.{"\n"}
                    ➡ Evite esfregar com força, pois isso gera frizz e pode quebrar os fios mais finos.{"\n\n"}
                    - Se optar pelo secador, use sempre um protetor térmico antes, mesmo para cabelos curtos.{"\n"}
                    - Mantenha o secador a uma distância de, no mínimo, 15 cm da raiz.{"\n"}
                    - Prefira o modo morno ou frio, evitando o calor excessivo que agride os fios e o couro cabeludo.{"\n"}
                    - Finalize com as mãos ou um pente, alinhando suavemente os fios.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Prevenção do frizz e da quebra.</Text>{"\n"}
                    <Text style={styles.bold}>2. Couro cabeludo saudável, livre de agressões térmicas.</Text>{"\n"}
                    <Text style={styles.bold}>3. Aparência mais alinhada e sofisticada.</Text>
                </Text>

                <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
                <Text style={styles.description}>
                    Para quem tem fios finos e quer mais volume, seque os cabelos inclinando a cabeça para frente, direcionando o ar das pontas para a raiz.
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

export default Card29;
