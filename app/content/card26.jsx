import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card26 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/8e/e3/4d/8ee34d92307d146aea91c21b262f7282.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Água morna ou fria na lavagem: saúde e brilho garantidos
                </Text>
                <Text style={styles.description}>
                    A temperatura da água impacta diretamente na saúde capilar. A água quente resseca e abre excessivamente as cutículas, enquanto a fria sela e promove brilho.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - Lave o cabelo com água morna, que ajuda a remover a sujeira sem agredir.{"\n"}
                    - Finalize sempre com água fria, promovendo o selamento das cutículas.{"\n"}
                    - Evite lavar os fios diariamente com água quente, pois isso pode causar ressecamento e aumentar a produção de oleosidade.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Fios mais brilhantes e macios.</Text>{"\n"}
                    <Text style={styles.bold}>2. Menos frizz e pontas duplas.</Text>{"\n"}
                    <Text style={styles.bold}>3. Couro cabeludo mais saudável.</Text>
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

export default Card26;
