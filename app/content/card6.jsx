import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card6 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/29/b4/8e/29b48e9fa2fc23bea0a12388d57e15a0.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Hidratação Pós-Sol: Como Recuperar o Cabelo Depois da Praia ou Piscina
                </Text>

                <Text style={styles.description}>
                    Sol escaldante, água salgada do mar, cloro da piscina... tudo isso é uma delícia para o corpo e a alma — mas para o cabelo? Nem tanto. A exposição excessiva a esses elementos resseca, desbota, embaraça e enfraquece os fios. O resultado: aquele cabelo opaco, áspero e sem vida.
                </Text>

                <Text style={styles.sectionTitle}>☀️ Por que o cabelo sofre tanto no verão?</Text>
                <Text style={styles.description}>
                    - Sol em excesso danifica a cutícula dos fios e oxida os pigmentos, causando desbotamento e ressecamento.{"\n"}
                    - Água do mar é rica em sal, que rouba a hidratação natural dos fios.{"\n"}
                    - Cloro da piscina altera o pH do cabelo, deixando os fios frágeis, principalmente os quimicamente tratados.
                </Text>

                <Text style={styles.sectionTitle}>✅ Dicas para Recuperar o Cabelo Pós-Sol:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Lave com shampoo detox suave:</Text>{"\n"}
                    Depois de um dia de praia ou piscina, o ideal é remover resíduos de sal, areia, cloro e protetor solar capilar.{"\n"}
                    🧴 Evite shampoos com sulfato agressivo. Prefira fórmulas suaves e com extratos naturais como chá verde, babosa ou gengibre.
                </Text>

                <Text style={styles.description}>
                    <Text style={styles.bold}>2. Faça uma hidratação profunda com ingredientes calmantes:</Text>{"\n"}
                    Após a limpeza, é hora de devolver água e nutrientes aos fios. Aposte em máscaras hidratantes com ingredientes regeneradores como:{"\n"}
                    - Iogurte natural ou leite de coco (nutrição e emoliência){"\n"}
                    - Mel (hidratante natural e antioxidante){"\n"}
                    - Babosa (calmante e cicatrizante)
                </Text>

                <Text style={styles.description}>
                    <Text style={styles.bold}>3. Finalize com leave-in com proteção UV:</Text>{"\n"}
                    Assim como a pele, o cabelo também precisa de proteção solar. Um leave-in com filtro UV forma uma barreira contra os raios solares e impede que a hidratação vá embora rapidamente.{"\n"}
                    🌞 Bônus: ele também ajuda a desembaraçar, definir e proteger do vento!
                </Text>

                <Text style={styles.sectionTitle}>🧪 Receita Caseira de Hidratação Pós-Sol:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>Você vai precisar de:</Text>{"\n"}
                    - 2 colheres de iogurte natural (sem açúcar){"\n"}
                    - 1 colher de mel puro{"\n"}
                    - 2 colheres da sua máscara hidratante preferida{"\n\n"}

                    <Text style={styles.bold}>Modo de preparo e uso:</Text>{"\n"}
                    1. Misture todos os ingredientes até formar um creme homogêneo.{"\n"}
                    2. Aplique nos cabelos lavados e úmidos, enluvando mecha por mecha.{"\n"}
                    3. Coloque uma touca de plástico e deixe agir por 20 a 30 minutos.{"\n"}
                    4. Enxágue com água fria e finalize com seu leave-in com proteção solar.{"\n\n"}
                    💡 Essa mistura é rica em proteínas, hidratação e antioxidantes naturais. Ideal para fios ressecados pelo sol!
                </Text>

                <Text style={styles.sectionTitle}>✨ Produtos Salvadores Pós-Sol:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>Elseve Hidra Detox (L’Oréal Paris):</Text> Combina purificação suave da raiz com hidratação leve no comprimento.{"\n"}
                    <Text style={styles.bold}>Creme Multifuncional #TôDeCacho Verão (Salon Line):</Text> Tem proteção UV, é multifuncional (hidrata, finaliza e trata), e foi feito especialmente para cuidar dos fios expostos ao sol e mar.
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

export default Card6;
