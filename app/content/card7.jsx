import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card7 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/d8/7f/72/d87f722e70b4a44253a6d7df893ca557.jpg' }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Pre-poo com óleos ou cremes</Text>
                <Text style={styles.description}>
                O Pré-poo (abreviação de “pré-shampoo”) é uma técnica indispensável para quem busca manter os fios saudáveis e reduzir os danos causados pelo processo de lavagem. Consiste na aplicação de um produto nutritivo nos cabelos antes do uso do shampoo, criando uma camada protetora que impede a perda excessiva de água e nutrientes durante a higienização. 
                </Text>
                <Text style={styles.sectionTitle}>Como Fazer?</Text>
                <Text style={styles.sectionTitle}>Escolha o produto ideal:</Text>
                <Text style={styles.description}>
                - Óleos vegetais puros e prensados a frio, como óleo de coco, óleo de rícino, abacate ou argan, são excelentes opções.{"\n"}
                    - Cremes de tratamento mais densos e ricos em agentes emolientes também podem ser utilizados, especialmente em cabelos mais ressecados.
                    {"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Aplicação:</Text>
                <Text style={styles.description}>
                    - Com os cabelos secos ou levemente úmidos, separe-os em mechas para garantir uma aplicação uniforme.{"\n"}
                    - Aplique o óleo ou creme generosamente, concentrando-se no comprimento e, principalmente, nas pontas — áreas mais suscetíveis a danos e ressecamento.{"\n"}
                    - Evite a raiz para não sobrecarregar o couro cabeludo ou causar excesso de oleosidade.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Tempo de ação: </Text>
                <Text style={styles.description}>
                    - Deixe o produto agir por no mínimo 20 minutos.{"\n"}
                    - Para um tratamento mais profundo, pode-se deixar o produto por até 1 hora, utilizando uma touca plástica ou térmica, que potencializa a penetração dos nutrientes.{"\n"}
                </Text> 
                <Text style={styles.sectionTitle}>Benefícios do Pre-poo:</Text>
                <Text style={styles.description}>
                    ✅Proteção contra agressões: cria uma barreira que protege a fibra capilar da ação detergente do shampoo, evitando o ressecamento.{"\n"}
                    ✅Preservação de nutrientes: impede a perda de lipídios e proteínas naturais dos fios, essenciais para a saúde e vitalidade capilar.{"\n"}
                    ✅Melhora na elasticidade: os fios ficam mais maleáveis e resistentes à quebra.{"\n"}
                    ✅Facilidade no desembaraço: diminui a formação de nós e facilita o penteado pós-lavagem.{"\n"}
                    ✅Ideal para cabelos quimicamente tratados: especialmente indicado para quem faz colorações, alisamentos, ou usa fontes de calor com frequência, pois essas práticas tornam os fios mais vulneráveis à perda de massa capilar.{"\n"} 
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                Em cabelos cacheados e crespos, que naturalmente possuem maior tendência ao ressecamento, o pre-poo deve ser incorporado como uma etapa regular da rotina capilar. Já para cabelos oleosos, recomenda-se optar por cremes leves ou óleos menos densos, como o de jojoba, e evitar exageros na quantidade.
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
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
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

export default Card7;