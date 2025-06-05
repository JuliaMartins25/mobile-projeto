import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card10 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/58/12/aa/5812aad7e611638c34ecdfcf68355038.jpg' }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Hidratação com Ácido Hialurônico:</Text>
                <Text style={styles.description}>
                O ácido hialurônico é um dos ativos mais potentes e modernos para tratamentos capilares, especialmente quando o objetivo é hidratar profundamente os fios. Sua grande capacidade de retenção de água faz com que seja ideal para cabelos que sofrem com ressecamento, aspereza, opacidade ou perda de elasticidade.
                </Text>
                <Text style={styles.sectionTitle}>Por que o ácido hialurônico é tão eficaz?</Text>
                <Text style={styles.description}>
                - Alta capacidade de retenção de umidade: uma molécula de ácido hialurônico é capaz de reter até 1000 vezes o seu peso em água, o que significa que ele mantém os fios hidratados por muito mais tempo.{"\n"}
                - Preenche falhas da fibra capilar: além de hidratar, ele ajuda a preencher pequenas fissuras e porosidades nos fios, conferindo um aspecto mais uniforme, saudável e brilhante.{"\n"}
                - Melhora a elasticidade: fios desidratados tendem a ficar frágeis e quebradiços. O ácido hialurônico devolve a elasticidade e a flexibilidade, reduzindo a quebra e as pontas duplas.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer a hidratação com ácido hialurônico passo a passo:</Text>
                <Text style={styles.sectionTitle}>Escolha do produto:</Text>
                <Text style={styles.description}>
                    - Opte por máscaras, ampolas ou séruns capilares que contenham ácido hialurônico na fórmula. Existem linhas específicas que associam esse ativo a outros ingredientes hidratantes, como babosa, pantenol e glicerina, potencializando os resultados.{"\n"}
                    - Evite produtos que contenham muitos silicones pesados, que podem criar uma barreira artificial e impedir a penetração adequada do ácido. 
                </Text>
                <Text style={styles.sectionTitle}>Lavagem prévia:</Text>
                <Text style={styles.description}>
                    - Lave o cabelo com um shampoo suave, de preferência sem sulfato, para não ressecar ainda mais os fios.{"\n"}
                    - Enxágue bem, garantindo que não reste nenhum resíduo que possa atrapalhar a absorção do tratamento.
                </Text> 
                <Text style={styles.sectionTitle}>Aplicação da máscara:</Text>
                <Text style={styles.description}>
                    - Com os fios úmidos e limpos, separe-os em mechas para facilitar a distribuição do produto.{"\n"}
                    - Aplique a máscara ou ampola contendo ácido hialurônico em cada mecha, do comprimento até as pontas, evitando a raiz para não pesar ou estimular a oleosidade.{"\n"}
                    - Enluve bem cada mecha: este movimento de fricção leve entre as mãos e o fio ajuda a aquecer a fibra capilar e facilita a penetração dos ativos.
                </Text> 
                <Text style={styles.sectionTitle}>Tempo de ação:</Text>
                <Text style={styles.description}>
                    - Deixe a máscara agir de acordo com as instruções do fabricante, geralmente entre 5 a 10 minutos.{"\n"}
                    - Para potencializar a hidratação, você pode usar uma touca térmica ou uma toalha aquecida, promovendo a abertura das cutículas e facilitando a absorção.
                </Text>
                <Text style={styles.sectionTitle}>Enxágue:</Text>
                <Text style={styles.description}>
                    - Remova o produto completamente com água fria ou morna, que ajuda a selar as cutículas, garantindo que a hidratação permaneça dentro da fibra capilar.
                </Text> 
                <Text style={styles.sectionTitle}>Finalização:</Text>
                <Text style={styles.description}>
                    - Se desejar, aplique um leave-in hidratante ou um protetor térmico se for usar secador.{"\n"}
                    - Deixe secar naturalmente ou utilize ferramentas de calor com proteção adequada.
                </Text> 
                <Text style={styles.sectionTitle}>Benefícios principais dessa hidratação:</Text>
                <Text style={styles.description}>
                    ✅Hidratação intensa e duradoura: ideal para cabelos extremamente secos, ressecados ou porosos.{"\n"}
                    ✅Recuperação da elasticidade: fios mais flexíveis, com menos quebra e pontas duplas.{"\n"}
                    ✅Brilho e maciez: cabelos visivelmente mais brilhantes e com toque sedoso, resultado da fibra capilar mais uniforme e hidratada.{"\n"}
                    ✅Prevenção do ressecamento futuro: ao manter a hidratação interna, o ácido hialurônico ajuda a proteger os fios contra agressões diárias, como calor, poluição e químicas.
                </Text>
                <Text style={styles.sectionTitle}>Indicado para:</Text>
                <Text style={styles.description}>
                    ➡️Cabelos naturalmente secos ou ressecados por químicas como coloração, descoloração ou alisamentos.{"\n"}
                    ➡️Fios danificados por uso frequente de ferramentas térmicas (secador, chapinha, babyliss).{"\n"}
                    ➡️Cabelos opacos, ásperos ou com dificuldade de manter a hidratação.
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                Para manutenção do tratamento, inclua produtos com ácido hialurônico na sua rotina de cuidados diários, como shampoos, condicionadores e leave-ins, criando uma camada contínua de hidratação e proteção.
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

export default Card10;