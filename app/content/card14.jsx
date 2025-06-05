import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card14 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v6494027320381173030/products/95055_1-atualizada.png&height=940&width=940' }}
                    style={styles.image}
                    
                />
                <Text style={styles.title}>Umectação noturna com óleos vegetais:</Text>
                <Text style={styles.description}>
                A umectação noturna é uma técnica poderosa de nutrição intensa, indicada especialmente para cabelos ressecados, quebradiços ou com pontas espigadas. O procedimento consiste em aplicar um óleo vegetal puro nos fios secos, preferencialmente antes de dormir, permitindo que o produto atue por várias horas.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer:</Text>
                <Text style={styles.description}>
                Escolha um óleo vegetal 100% puro e prensado a frio, como o de coco, abacate, oliva, rícino ou argan. Esses óleos são ricos em ácidos graxos e vitaminas essenciais para a saúde capilar. Divida o cabelo seco em pequenas mechas e aplique o óleo generosamente, enluvando cada uma — ou seja, deslizando as mãos ao longo do fio, promovendo a penetração do óleo na fibra capilar. Dê atenção especial ao comprimento e às pontas, que são as áreas mais ressecadas. Evite a aplicação no couro cabeludo, a não ser que esteja tratando ressecamento ou descamação nesta região.{"\n\n"}
                Após aplicar o óleo, prenda os fios suavemente e proteja o cabelo com uma touca, fronha de cetim ou uma camiseta de algodão, evitando atrito com o travesseiro e potencializando a absorção dos nutrientes.{"\n\n"}
                Na manhã seguinte, faça a remoção do óleo utilizando a técnica de pré-lavagem: aplique uma pequena quantidade de condicionador ou máscara antes do shampoo, massageando para ajudar a soltar o excesso de óleo, e depois lave normalmente com shampoo suave.
                </Text>
                <Text style={styles.sectionTitle}>Benefícios:</Text>
                <Text style={styles.description}>
                    ✅Recupera a oleosidade natural dos fios, essencial para manter o brilho e a saúde capilar.{"\n"}
                    ✅Melhora a elasticidade, prevenindo a quebra e facilitando o desembaraço{"\n"}
                    ✅Reduz significativamente as pontas duplas e o aspecto espigado.{"\n"}
                    ✅Ideal para cabelos que passam por processos químicos ou uso frequente de ferramentas térmicas. 
                </Text>
                <Text style={styles.sectionTitle}>Frequência recomendada:</Text>
                <Text style={styles.description}>
                    1 a 2 vezes por semana, conforme o nível de ressecamento do cabelo.{"\n"}
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

export default Card14;