import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card15 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/f6/55/0a/f6550a8edbafec3c56b2657761c7e480.jpg' }}
                    style={styles.image}
                    
                />
                <Text style={styles.title}>Esfoliação capilar para saúde do couro cabeludo:</Text>
                <Text style={styles.description}>
                A esfoliação capilar é uma etapa essencial, mas muitas vezes negligenciada, na rotina de cuidados com o cabelo. Ela promove uma limpeza profunda do couro cabeludo, removendo resíduos acumulados de produtos, oleosidade excessiva, células mortas e impurezas que não são eliminadas apenas com a lavagem tradicional.

                </Text>
                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                A esfoliação deve ser realizada uma vez por semana, especialmente para quem usa muitos produtos de finalização, sofre com oleosidade excessiva, caspa ou percebe que os fios estão com dificuldade de crescer.{"\n\n"}
                Você pode optar por um esfoliante capilar pronto, desenvolvido especificamente para o couro cabeludo, com partículas esfoliantes suaves e ingredientes calmantes. Caso prefira uma opção caseira, misture uma colher de sopa de açúcar cristal ou mascavo com duas colheres de sopa de condicionador ou óleo vegetal (como óleo de coco ou de rícino), criando uma pasta com textura granulada.{"\n\n"}
                Com os cabelos úmidos, aplique a mistura diretamente no couro cabeludo, separando os fios em seções para facilitar a aplicação. Massageie com as pontas dos dedos — nunca com as unhas —, realizando movimentos circulares e suaves por aproximadamente 5 minutos. Esse movimento promove a remoção das células mortas, ativa a circulação sanguínea e desobstrui os folículos pilosos.{"\n\n"}
                Após a massagem, enxágue abundantemente e prossiga com a lavagem normal utilizando shampoo e condicionador.
                </Text>
                <Text style={styles.sectionTitle}>Benefícios:</Text>
                <Text style={styles.description}>
                    ✅Estimula a circulação sanguínea local, favorecendo o crescimento saudável e mais rápido dos fios.{"\n"}
                    ✅Desobstrui os poros do couro cabeludo, permitindo que os nutrientes dos produtos de tratamento penetrem melhor.{"\n"}
                    ✅Combate o excesso de oleosidade e previne problemas como caspa e dermatite seborreica.{"\n"}
                    ✅Deixa a raiz mais limpa e leve, resultando em fios mais soltos e com movimento.{"\n"}
                    ✅Melhora a oxigenação do couro cabeludo, fortalecendo o bulbo capilar.
                </Text>
                <Text style={styles.sectionTitle}>Cuidados importantes:</Text>
                <Text style={styles.description}>
                    - Não realizar a esfoliação com muita força para evitar ferimentos ou irritações.{"\n"}
                    - Evitar o procedimento caso tenha feridas, dermatites ou irritações ativas no couro cabeludo.{"\n"}
                    - Após a esfoliação, sempre hidratar os fios, pois o processo pode causar um leve ressecamento.
                </Text> 
                <Text style={styles.sectionTitle}>Frequência recomendada:</Text>
                <Text style={styles.description}>
                    - 1 vez por semana, ou a cada 15 dias, dependendo do tipo de couro cabeludo e necessidade individual.
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

export default Card15;