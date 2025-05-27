import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Card1 = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.card} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Cronograma Capilar</Text>
                <Text style={styles.sectionTitle}>Hidratação</Text>
                <Text style={styles.description}>
                    Repõe a água dos fios, essencial para manter o cabelo macio e sem frizz.
                </Text>
                <Text style={styles.sectionTitle}>Nutrição (umectação)</Text>
                <Text style={styles.description}>
                    Devolve os lipídeos (óleos) naturais, conferindo brilho e proteção.
                </Text>
                <Text style={styles.sectionTitle}>Reconstrução</Text>
                <Text style={styles.description}>
                    Repõe a massa capilar e a queratina, fortalecendo cabelos frágeis e quebradiços.
                </Text>
                <Text style={styles.sectionTitle}>Como saber do que seu cabelo precisa?</Text>
                <Text style={styles.description}>
                    Faça o teste do copo com água: coloque um fio limpo no copo e aguarde 3 minutos.{"\n"}
                    <Text style={styles.bold}>Se boiar:</Text> o cabelo precisa de hidratação.{"\n"}
                    <Text style={styles.bold}>Se ficar no meio:</Text> necessita de nutrição.{"\n"}
                    <Text style={styles.bold}>Se afundar:</Text> o foco deve ser na reconstrução.
                </Text>
                <Text style={styles.extra}>
                    Dica extra: use produtos específicos para cada etapa e respeite o tempo de pausa indicado. Evite excessos, principalmente na reconstrução, que feita em demasia pode enrijecer os fios.
                </Text>
                <Text style={styles.sectionTitle}>Quais são os tratamentos no cronograma capilar?</Text>
                <Text style={styles.description}>
                    O cronograma capilar é composto por três tratamentos principais: hidratação, umectação/nutrição e reconstrução. A frequência de cada um depende das necessidades do cabelo. A hidratação e a nutrição são feitas com mais regularidade, enquanto a reconstrução deve ser realizada com menos frequência (a cada 15 dias ou uma vez por mês).
                </Text>
                <Text style={styles.sectionTitle}>Cronograma capilar: hidratação</Text>
                <Text style={styles.description}>
                    A hidratação visa devolver a umidade aos fios, especialmente após danos causados por calor, sol e poluição. Para hidratar, são usadas máscaras com ingredientes como ácido hialurônico, que proporcionam alta hidratação e força. A linha Elseve Hidra Hialurônico L'Oréal é indicada, promovendo até 4x mais hidratação e 7x mais força nos fios.
                </Text>
                <Text style={styles.sectionTitle}>Cronograma capilar: nutrição ou umectação</Text>
                <Text style={styles.description}>
                    A nutrição (ou umectação) repõe lipídios, essenciais para cabelos mais secos, especialmente cacheados e crespos. Fios cacheados, por exemplo, não conseguem distribuir bem os óleos naturais, necessitando de máscaras com óleos. A linha Elseve Óleo Extraordinário, com óleos de flores, ou Elseve Cachos Longos dos Sonhos (também da L'Oréal), com ácido hialurônico e óleo de rícino, são boas opções para esse passo.
                </Text>
                <Text style={styles.sectionTitle}>Cronograma capilar: reconstrução</Text>
                <Text style={styles.description}>
                    A reconstrução repõe a massa capilar perdida, fundamental para cabelos danificados por processos químicos (como coloração e alisamentos). A linha Elseve Reparação Total 5, enriquecida com Pro-Queratina, é indicada para cabelos muito danificados. Já a linha Longo dos Sonhos recupera os fios longos e enfraquecidos.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer cronograma capilar?</Text>
                <Text style={styles.description}>
                    Para montar o cronograma capilar, é essencial primeiro testar a porosidade do cabelo. Com isso, você identifica as necessidades do fio e escolhe os tratamentos mais adequados. O cronograma geralmente inclui 2-3 tratamentos por semana (hidratação, nutrição e reconstrução) adaptados às necessidades específicas.
                </Text>
                <Text style={styles.sectionTitle}>Teste de porosidade para descobrir se o cabelo está saudável</Text>
                <Text style={styles.description}>
                    O teste de porosidade determina a capacidade do cabelo de absorver nutrientes. Se os fios afundam na água, há alta porosidade (cabelos danificados). Se boiam, há baixa porosidade (dificuldade de absorção). Fios que ficam no meio indicam porosidade média e cabelo saudável.
                </Text>
                <Text style={styles.sectionTitle}>Cronograma capilar semanal</Text>
                <Text style={styles.description}>
                    Com base na porosidade, o cronograma deve ser montado. Para cabelos com baixa porosidade, priorize hidratação; com média porosidade, comece com nutrição e reconstrução; e com alta porosidade, focar em reconstrução e acidificação. A frequência de tratamentos deve variar conforme a necessidade do cabelo.
                </Text>
                <Text style={styles.sectionTitle}>Tipos de cronograma capilar</Text>
                <Text style={styles.description}>
                    <Text style={styles.bold}>Para crescimento:</Text> Foca em fortalecer os fios, prevenindo a quebra. Use ativos como babosa e óleo de rícino.{"\n\n"}
                    <Text style={styles.bold}>Para cabelo oleoso:</Text> A hidratação e o controle de oleosidade são essenciais. A linha Elseve Pure Hialurônico da marca L'Oréal, com ácido salicílico, controla a oleosidade enquanto hidrata.{"\n\n"}
                    <Text style={styles.bold}>Para cabelo cacheado:</Text> A nutrição é importante devido ao ressecamento natural dos cachos. Use produtos que nutrem e definem os fios.{"\n\n"}
                    <Text style={styles.bold}>Para loiras:</Text> A reconstrução e hidratação são essenciais para manter a cor e evitar danos. A nutrição intensifica o brilho.{"\n\n"}
                    <Text style={styles.bold}>Para cabelo quimicamente tratado:</Text> A reconstrução e nutrição são importantes para repor massa e hidratar os fios danificados.{"\n\n"}
                    <Text style={styles.bold}>Para cabelo liso:</Text> Foca em hidratação e controle de oleosidade ou nutrição, dependendo das necessidades do cabelo.
                </Text>
                <Text style={styles.sectionTitle}>Como montar um kit cronograma capilar?</Text>
                <Text style={styles.description}>
                    O kit deve ser escolhido com base no tipo de cabelo e nos tratamentos necessários. Produtos como os da linha Elseve da L'Oréal (Hidra Hialurônico, Glycolic Gloss, Pure Hialurônico) oferecem tratamentos especializados para hidratação, nutrição e reconstrução.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A2D2FF',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 22,
        shadowColor: '#A2D2FF',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
        padding: 28,
        margin: 24,
        width: 340,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#A2D2FF',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F96380',
        marginTop: 18,
        marginBottom: 6,
    },
    description: {
        fontSize: 15,
        color: '#4A4A4A',
        textAlign: 'left',
        marginBottom: 6,
        lineHeight: 22,
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

export default Card1;