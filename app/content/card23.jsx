import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card23 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/ab/cf/de/abcfded76998caa83299eee8581edf60.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Tratamento detox capilar: renovação profunda para couro cabeludo e fios
                </Text>
                <Text style={styles.description}>
                    O acúmulo de resíduos de produtos, oleosidade e poluentes prejudica a saúde capilar, podendo causar queda, dermatites e obstrução dos folículos.
                </Text>

                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                    - A cada 15 dias, use um shampoo detox ou esfoliante capilar.{"\n"}
                    - Aplique no couro cabeludo úmido, massageando suavemente com as pontas dos dedos.{"\n"}
                    - Enxágue bem e prossiga com hidratação, pois o detox pode deixar os fios mais "abertos".
                </Text>

                <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
                <Text style={styles.description}>
                    Finalize com um condicionador ou máscara de pH baixo para selar as cutículas.
                </Text>

                <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Limpeza profunda e sensação refrescante.</Text>{"\n"}
                    <Text style={styles.bold}>2. Estímulo à circulação do couro cabeludo.</Text>{"\n"}
                    <Text style={styles.bold}>3. Melhora na absorção de tratamentos.</Text>
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

export default Card23;
