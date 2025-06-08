import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card16 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/d7/5d/59/d75d59b6431efb1ba8cd89848510d67a.jpg' }}
                    style={styles.image}
                    
                />
                <Text style={styles.title}>Low Poo para fios saudáveis:</Text>
                <Text style={styles.description}>
                O Low Poo é uma técnica de cuidado capilar que propõe a substituição de shampoos tradicionais — que geralmente contêm sulfatos agressivos — por produtos de limpeza suave, sem detergentes fortes. O objetivo é preservar a oleosidade natural dos fios, mantendo a hidratação, o brilho e a saúde capilar, especialmente em cabelos mais sensíveis ou ressecados.
                </Text>
                <Text style={styles.sectionTitle}>Como funciona:</Text>
                <Text style={styles.description}>
                Os shampoos tradicionais contêm surfactantes fortes, como o Lauril Sulfato de Sódio, que promovem muita espuma, mas também removem de forma excessiva a oleosidade e os nutrientes naturais do cabelo. No Low Poo, são utilizados shampoos com surfactantes mais leves (como Cocamidopropyl Betaine ou Decyl Glucoside), que limpam de maneira eficaz, porém sem agredir ou ressecar os fios.{"\n\n"}
                Essa prática é especialmente benéfica para cabelos cacheados, ondulados e crespos, que, por sua estrutura em espiral, têm mais dificuldade em distribuir a oleosidade natural da raiz até as pontas. Também é indicada para cabelos quimicamente tratados (com colorações, alisamentos e descolorações), que já possuem a fibra capilar mais fragilizada.
                </Text>
                <Text style={styles.sectionTitle}>Como aderir ao Low Poo:</Text>
                <Text style={styles.description}>
                    - Leia os rótulos dos shampoos e evite produtos que contenham sulfatos agressivos, como Lauril Sulfato de Sódio (SLS) ou Laureth Sulfato de Sódio (SLES).{"\n"}
                    - Prefira fórmulas livres de petrolatos e parabenos, que também podem prejudicar a saúde capilar ao longo do tempo.{"\n"}
                    - Mantenha o cronograma capilar em dia (hidratação, nutrição e reconstrução), pois o Low Poo potencializa a retenção dos tratamentos.{"\n"}
                    - Caso o cabelo esteja muito ressecado ou danificado, intercale o Low Poo com a técnica No Poo, que elimina totalmente o uso de shampoo, utilizando apenas condicionadores limpantes (co-wash).
                </Text>
                <Text style={styles.sectionTitle}>Benefícios:</Text>
                <Text style={styles.description}>
                    ✅Mantém a oleosidade natural, essencial para a proteção da fibra capilar.{"\n"}
                    ✅Previne o ressecamento e a quebra, principalmente nas pontas.{"\n"}
                    ✅Reduz o frizz e melhora a definição em cabelos cacheados e ondulados.{"\n"}
                    ✅Prolonga a durabilidade de tratamentos químicos e colorações.{"\n"}
                    ✅Favorece um couro cabeludo mais saudável, livre de irritações causadas por detergentes agressivos.
                </Text>
                <Text style={styles.sectionTitle}>Indicado para:</Text>
                <Text style={styles.description}>
                    - Cabelos cacheados, ondulados ou crespos.{"\n"}
                    - Fios quimicamente tratados (descoloridos, alisados ou coloridos).{"\n"}
                    - Cabelos ressecados e sensibilizados.
                </Text> 
                <Text style={styles.sectionTitle}>Não indicado para:</Text>
                <Text style={styles.description}>
                    Quem possui couro cabeludo extremamente oleoso ou sofre de dermatites específicas, que podem exigir uma limpeza mais intensa — nesses casos, é importante consultar um dermatologista. 
                </Text> 
                <Text style={styles.sectionTitle}>Frequência recomendada:</Text>
                <Text style={styles.description}>
                    Pode ser utilizado em todas as lavagens, substituindo completamente o shampoo tradicional.
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
        width: 280,
        height: 300,
        marginBottom: 16,
        borderRadius: 10,
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

export default Card16;