import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card13 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/a4/94/95/a49495acccd0ec4100c8423b0045b5cf.jpg' }}
                    style={styles.image} 
                />
                <Text style={styles.title}>Spray de vinagre de maçã para selagem:</Text>
                <Text style={styles.description}>
                O vinagre de maçã é um dos ingredientes naturais mais eficazes para a selagem capilar, graças à sua acidez equilibrada, rica em nutrientes, enzimas e antioxidantes. Quando usado na forma de spray, ele se torna uma solução prática e eficiente para melhorar a saúde e a aparência dos cabelos, principalmente aqueles que sofrem com porosidade excessiva, opacidade e frizz.
                </Text>
                <Text style={styles.sectionTitle}>Por que usar vinagre de maçã no cabelo?</Text>
                <Text style={styles.description}>
                ✅Regula o pH: O pH natural do cabelo saudável varia entre 4,5 e 5,5. Muitos shampoos e tratamentos abrem as cutículas capilares, elevando o pH. O vinagre de maçã, levemente ácido, ajuda a restaurar o pH ideal, promovendo o fechamento das cutículas.{"\n"}
                ✅Sela as cutículas: A selagem das cutículas impede a perda de água e nutrientes, resultando em fios mais brilhantes, macios e resistentes.{"\n"}
                ✅Reduz o frizz: Com as cutículas fechadas, os fios se mantêm mais alinhados, diminuindo significativamente o frizz e os arrepiados indesejados.{"\n"}
                ✅Aumenta o brilho: Fios com cutículas seladas refletem melhor a luz, proporcionando brilho e luminosidade natural.{"\n"}
                ✅Combate a porosidade: Essencial para cabelos muito porosos, seja por processos químicos, calor excessivo ou exposição ao sol, recuperando a saúde capilar.{"\n"}
                ✅Propriedades antifúngicas e antibacterianas: O vinagre de maçã também ajuda a equilibrar o microbioma do couro cabeludo, combatendo a caspa e prevenindo irritações.
                </Text>
                <Text style={styles.sectionTitle}>Como preparar o spray de vinagre de maçã:</Text>
                <Text style={styles.description}>
                    ➡️Ingredientes: 1 colher de sopa (aprox. 15 ml) de vinagre de maçã orgânico e não filtrado (preferencialmente com “a mãe”, que são as enzimas naturais). 200 ml de água filtrada ou mineral.{"\n"}
                    ➡️Modo de preparo: Em um frasco borrifador limpo, adicione a água e, em seguida, o vinagre de maçã.Misture bem antes de cada aplicação, pois o vinagre pode se depositar no fundo.{"\n"}
                    ➡️Proporção segura: A diluição 1:13 (1 parte de vinagre para 13 partes de água) é suave o suficiente para evitar agressões, mantendo a eficácia na selagem.
                </Text>
                <Text style={styles.sectionTitle}>Como aplicar corretamente:</Text>
                <Text style={styles.description}>
                    - Lave o cabelo com shampoo e aplique o condicionador normalmente.{"\n"}
                    - Enxágue bem para remover qualquer resíduo do produto.{"\n"}
                    - Com os fios ainda úmidos, borrife o spray de vinagre de maçã no comprimento e pontas, evitando a raiz para não alterar o equilíbrio natural do couro cabeludo.{"\n"}
                    - Não é necessário enxaguar. Deixe secar naturalmente ou finalize como preferir (secador ou difusor).{"\n\n"}
                    ⚠️Atenção: o cheiro do vinagre desaparece completamente quando os fios secam, portanto não se preocupe com odores residuais.
                </Text> 
                <Text style={styles.sectionTitle}>Benefícios imediatos e a longo prazo:</Text>
                <Text style={styles.description}>
                    ✅Imediato: fios mais macios, com menos frizz, e aparência mais alinhada e brilhante.{"\n"}
                    ✅Médio e longo prazo: cabelos mais fortes e menos quebradiços, com porosidade equilibrada e aspecto saudável. 
                </Text> 
                <Text style={styles.sectionTitle}>Para quem é ideal essa técnica?</Text>
                <Text style={styles.description}>
                    ✔️Cabelos porosos: indicados especialmente para quem faz químicas (alisamentos, descolorações), pois esses processos danificam a estrutura do fio, abrindo as cutículas.{"\n"}
                    ✔️Cabelos opacos e sem vida: ideal para quem deseja recuperar o brilho e a maleabilidade.{"\n"}
                    ✔️Cabelos com frizz persistente: o selamento das cutículas reduz o frizz, facilitando o desembaraço e a modelagem dos fios. 
                </Text> 
                <Text style={styles.sectionTitle}>Com que frequência devo usar?</Text>
                <Text style={styles.description}>
                    ➡️Cabelos muito danificados ou porosos: até 2 vezes por semana.{"\n"}
                    ➡️Cabelos normais ou pouco danificados: a cada 10 ou 15 dias, como tratamento de manutenção.{"\n"}
                    ➡️Cabelos oleosos: use com moderação, evitando a raiz para não estimular a oleosidade. 
                </Text>
                <Text style={styles.sectionTitle}>Cuidados importantes:</Text>
                <Text style={styles.description}>
                    ⚠️Nunca utilize vinagre puro diretamente nos fios, pois pode causar ressecamento e irritação.{"\n"}
                    ⚠️Opte sempre pelo vinagre de maçã orgânico e de boa procedência, que contém maior concentração de nutrientes benéficos.{"\n"}
                    ⚠️Evite o uso excessivo para não alterar em demasia o pH, prejudicando a saúde capilar.
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                Para potencializar o tratamento, após aplicar o spray, enluve as mechas suavemente com as mãos. Esse gesto favorece o alinhamento das cutículas, promovendo ainda mais maciez e brilho.
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

export default Card13;