import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card5 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.image}
                />
                <Text style={styles.title}>Transição Capilar sem Sofrência: Dicas e Produtos para Começar com o Pé Direito</Text>
                <Text style={styles.description}>
                    Assumir os cachos é um ato de coragem, amor próprio e empoderamento. A transição capilar é o processo de parar com químicas de alisamento e permitir que seu cabelo natural cresça livremente. Mas sabemos que pode ser um caminho cheio de dúvidas, inseguranças e desafios.
                </Text>
                <Text style={styles.sectionTitle}>💡 Dicas para uma Transição sem Sofrência:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>1. Hidrate muuuito!</Text>{"\n"}
                    A hidratação é a melhor amiga de quem está em transição. Como você lida com duas texturas (parte alisada + natural), manter o cabelo bem hidratado ajuda a evitar quebra, ressecamento e facilita o desembaraço.{"\n"}
                    ✅ Use máscaras com ingredientes como aloe vera, pantenol, mel e óleos vegetais.
                </Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>2. Aposte na fitagem para finalizar</Text>{"\n"}
                    A técnica de fitagem ajuda a definir melhor os cachos da parte natural e até disfarçar a diferença entre as texturas. Ela consiste em aplicar creme de pentear nos fios divididos em pequenas mechas, "esticando" e modelando com os dedos.{"\n"}
                    ✅ Dica: use um creme de pentear consistente e tenha paciência — o resultado compensa!
                </Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>3. Use gelatinas e cremes definidores</Text>{"\n"}
                    Cremes de definição e gelatinas capilares são essenciais para segurar a forma dos cachos e dar mais controle ao volume e frizz. Eles ajudam a dar forma mesmo nos fios que ainda estão com química.{"\n"}
                    ✅ Combine creme + gelatina para um day after poderoso.
                </Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>4. Não tenha medo da tesoura (Big Chop?)</Text>{"\n"}
                    O "Big Chop" (grande corte) é um momento libertador para muitas mulheres — é quando você decide cortar toda a parte com química e manter apenas os fios naturais. Não precisa fazer isso logo no início. Mas se sentir que é a hora, vá com coragem: é o começo de um novo capítulo!{"\n"}
                    ✅ Converse com um profissional especializado em cabelos naturais para te ajudar nesse momento.
                </Text>
                <Text style={styles.sectionTitle}>✨ Produtos Mara para Acompanhar Sua Transição:</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>Salon Line #TôDeCacho:</Text> Linha completa para transição, com cremes, ativadores, máscaras e gelatinas específicas para misturar texturas.{"\n"}
                    <Text style={styles.bold}>Soul Power:</Text> Produtos 100% liberados, veganos e pensados especialmente para cabelos em transição, com ativos naturais e alta performance.{"\n"}
                    <Text style={styles.bold}>Gelatina Capicilin:</Text> Textura leve e fixação na medida para definir cachos, reduzir o frizz e manter o cabelo estiloso por dias.
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
        padding: 16, // Adicionado padding para espaçamento interno
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16, // Bordas arredondadas
        shadowColor: '#000', // Ajustado para sombra mais visível
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        padding: 20,
        margin: 16,
        width: '90%', // Ajustado para responsividade
        maxWidth: 360, // Limite de largura
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333', // Cor mais escura para contraste
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
    extra: {
        color: '#F96380',
        fontStyle: 'italic',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default Card5;