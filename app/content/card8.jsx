import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card8 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/f6/55/0a/f6550a8edbafec3c56b2657761c7e480.jpg' }}
                    style={styles.image}
                    
                />
                <Text style={styles.title}>Lavagem ao Contrário (Reverse Washing): </Text>
                <Text style={styles.description}>
                A técnica de lavagem ao contrário, também chamada de Reverse Washing, consiste em inverter a ordem tradicional de aplicação dos produtos durante a lavagem capilar. Em vez de começar com o shampoo, inicia-se o processo com uma máscara ou condicionador, seguido da aplicação do shampoo. Esta abordagem foi desenvolvida especialmente para atender às necessidades de cabelos que precisam de hidratação, mas que também sofrem com excesso de oleosidade ou com o aspecto pesado após tratamentos comuns.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer a Lavagem ao Contrário:</Text>
                <Text style={styles.sectionTitle}>Preparação dos fios:</Text>
                <Text style={styles.description}>
                - Molhe abundantemente os cabelos com água morna para ajudar na abertura das cutículas, facilitando a penetração dos ativos da máscara ou do condicionador.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Aplicação da máscara ou condicionador:</Text>
                <Text style={styles.description}>
                    - Escolha uma máscara leve, com foco em hidratação, ou um condicionador que tenha boa ação emoliente, mas sem excesso de óleo na composição.{"\n"}
                    - Aplique somente no comprimento e nas pontas, evitando a raiz para não estimular ainda mais a oleosidade.{"\n"}
                    - Enluve mecha a mecha, promovendo uma distribuição homogênea do produto.{"\n"}
                    - Deixe agir entre 3 a 5 minutos para um tratamento rápido, ou até 10 minutos se quiser potencializar o efeito hidratante.
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

export default Card8;