import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card12 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/f6/55/0a/f6550a8edbafec3c56b2657761c7e480.jpg' }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Personalização de tratamentos com misturinhas:</Text>
                <Text style={styles.description}>
                A técnica das misturinhas capilares é uma excelente maneira de potencializar os tratamentos, adaptando-os de forma específica às necessidades do seu cabelo em diferentes momentos. Essa prática transforma uma máscara tradicional em um verdadeiro elixir multifuncional, associando ativos naturais que podem promover desde hidratação intensa até estímulo ao crescimento capilar.
                </Text>
                <Text style={styles.sectionTitle}>Por que fazer misturinhas?</Text>
                <Text style={styles.description}>
                ✅Potencializa os efeitos do tratamento: adicionando ingredientes específicos, você intensifica a ação da máscara.{"\n"}
                ✅Personalização total: adapta o tratamento às necessidades do seu fio no momento — seja para mais hidratação, nutrição ou fortalecimento.{"\n"}
                ✅Custo-benefício: amplia a funcionalidade de produtos que já possui em casa.{"\n"}
                ✅Benefícios holísticos: os óleos essenciais, além de atuarem no cabelo, proporcionam bem-estar emocional e mental através da aromaterapia.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer uma misturinha capilar corretamente:</Text>
                <Text style={styles.sectionTitle}>Escolha da máscara base:</Text>
                <Text style={styles.description}>
                    ➡️Opte por uma máscara de hidratação ou nutrição de fórmula mais leve e sem parafina ou petrolatos, que permitem a melhor absorção dos ativos naturais.{"\n"}
                    ➡️Priorize aquelas com ingredientes hidratantes, como babosa, pantenol ou glicerina. 
                </Text>
                <Text style={styles.sectionTitle}>Enxágue completo:</Text>
                <Text style={styles.description}>
                    - Remova bem o produto com água morna, garantindo que não fiquem resíduos que possam pesar os fios.{"\n"}
                </Text> 
                <Text style={styles.sectionTitle}>Aplicação do shampoo:</Text>
                <Text style={styles.description}>
                    - Agora sim, aplique um shampoo suave, preferencialmente com pH fisiológico e livre de sulfatos agressivos, apenas na raiz e no couro cabeludo.{"\n"}
                    - Massageie suavemente com as pontas dos dedos para estimular a circulação sanguínea e realizar a higienização adequada.{"\n"}
                    - Deixe que a espuma formada desça naturalmente para o comprimento, sem esfregar os fios, evitando fricção desnecessária.
                </Text> 
                <Text style={styles.sectionTitle}>Enxágue final:</Text>
                <Text style={styles.description}>
                    - Remova completamente o shampoo com água fria ou morna, selando as cutículas e promovendo brilho.{"\n"}
                </Text> 
                <Text style={styles.sectionTitle}>Benefícios da Lavagem ao Contrário:</Text>
                <Text style={styles.description}>
                    ✅Leveza e movimento: ao criar uma barreira protetora com o condicionador ou máscara, evita-se que o shampoo retire totalmente os lipídios naturais, preservando a maciez sem comprometer a leveza.{"\n"}
                    ✅Controle da oleosidade: ao higienizar apenas a raiz, impede-se o acúmulo excessivo de resíduos no comprimento, beneficiando quem possui cabelos finos ou com tendência à oleosidade.{"\n"}
                    ✅Menos embaraço: pré-condicionar os fios facilita o desembaraço e reduz a quebra causada pelo atrito durante a lavagem.{"\n"}
                    ✅Equilíbrio ideal: mantém os fios hidratados, sem aspecto pesado e opaco que algumas máscaras podem causar em cabelos delicados.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Indicação:</Text>
                <Text style={styles.sectionTitle}>Perfeito para cabelos:</Text>
                <Text style={styles.description}>
                    ➡️Finos ou muito lisos, que facilmente ficam "lambidos" ou com aspecto oleoso.{"\n"}
                    ➡️Oleosos na raiz e secos nas pontas (cabelos mistos){"\n"}
                    ➡️Que sofrem com falta de volume ou que precisam de mais leveza e movimento.
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                Se quiser potencializar ainda mais a técnica, após o shampoo, pode aplicar um leave-in leve ou um spray de proteção térmica, especialmente se for usar secador. Assim, garante proteção adicional sem pesar nos fios.
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

export default Card12;