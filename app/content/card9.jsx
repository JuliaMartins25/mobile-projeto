import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card9 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/a2/5f/03/a25f0311328c83629f7b0153154cd91d.jpg' }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Técnica Plopping para definição de cachos:</Text>
                <Text style={styles.description}>
                O Plopping é uma técnica simples, mas extremamente eficaz para quem deseja definir os cachos ou ondas sem frizz e com o mínimo de quebra. Esse método consiste em envolver os cabelos em um tecido macio para que sequem parcialmente de forma mais controlada e natural, promovendo definição, volume e preservando a hidratação.
                </Text>
                <Text style={styles.sectionTitle}>Como fazer o Plopping corretamente?</Text>
                <Text style={styles.sectionTitle}>Preparação dos fios:</Text>
                <Text style={styles.description}>
                - Após lavar os cabelos, retire o excesso de água apenas com as mãos, evitando esfregar com toalha convencional, pois isso provoca frizz e quebra.{"\n"}
                - Mantenha os fios úmidos, mas não encharcados.
                </Text>
                <Text style={styles.sectionTitle}>Aplicação do creme de pentear:</Text>
                <Text style={styles.description}>
                    - Aplique generosamente um creme de pentear ou gel de definição da sua preferência, respeitando as características do seu fio (mais leve para cabelos finos; mais denso para cabelos volumosos).{"\n"}
                    - Enluve bem cada mecha, distribuindo uniformemente o produto para garantir hidratação e definição.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Escolha do tecido:</Text>
                <Text style={styles.description}>
                    - Prefira uma camiseta de algodão ou uma toalha de microfibra. Esses materiais são indicados por sua textura suave, que não causa atrito, evitando o frizz e a quebra dos fios.{"\n"}
                    - Evite toalhas felpudas, pois absorvem água em excesso e desfazem a estrutura natural dos cachos.
                    </Text> 
                    <Text style={styles.sectionTitle}>Como envolver os cabelos:</Text>
                <Text style={styles.description}>
                    - Estenda o tecido escolhido sobre uma superfície plana (como a cama).{"\n"}
                    - Incline a cabeça para frente, posicionando os fios bem centralizados no tecido.{"\n"}
                    - Comece a enrolar formando um turbante, mas sem apertar demais para não amassar ou deformar os cachos. O objetivo é criar uma "concha" confortável onde os cachos fiquem acomodados.
                    </Text> 
                <Text style={styles.sectionTitle}>Tempo de ação:</Text>
                <Text style={styles.description}>
                    - Deixe o turbante por cerca de 20 a 30 minutos, ou até que os cabelos sequem parcialmente.{"\n"}
                    - O tempo pode variar conforme a porosidade dos fios: cabelos mais porosos tendem a secar mais rapidamente.{"\n"}
                    - Após o período, solte os fios cuidadosamente.
                    </Text> 
                <Text style={styles.sectionTitle}>Finalização:</Text>
                <Text style={styles.description}>
                    - Deixe os cabelos secarem naturalmente ou utilize um difusor em temperatura baixa para evitar frizz e preservar a definição.{"\n"}
                    - Evite manipular os fios enquanto secam para manter a formação dos cachos intacta.{"\n"}
                    </Text> 
                <Text style={styles.sectionTitle}>Benefícios da Técnica Plopping:</Text>
                <Text style={styles.description}>
                    ✅Redução significativa do frizz: ao evitar o atrito com toalhas ásperas e limitar o contato com o ar durante a secagem, o frizz é drasticamente reduzido.{"\n"}
                    ✅Melhor definição dos cachos: a posição "em concha" preserva e reforça o formato natural dos cachos e ondas, resultando em mais definição e menos desmanche.{"\n"}
                    ✅Preservação da hidratação: como o tecido absorve apenas o excesso de água, sem remover a umidade essencial, os fios permanecem mais hidratados e macios.{"\n"}
                    ✅Evita a quebra: o uso de tecidos delicados e a ausência de atrito agressivo previnem a quebra e o afinamento dos fios.{"\n"} 
                    ✅Praticidade: é uma técnica rápida e fácil, que não requer equipamentos ou produtos adicionais, sendo ideal para o dia a dia.
                </Text>
                <Text style={styles.sectionTitle}>Indicado para:</Text>
                <Text style={styles.description}>
                    ➡️Cabelos cacheados e crespos, que precisam de definição, volume e proteção extra contra o frizz.{"\n"}
                    ➡️Cabelos ondulados que desejam estimular a formação de ondas mais marcadas.{"\n"}
                    ➡️Pessoas que preferem evitar o uso constante de fontes de calor para secar os fios.
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                Se quiser ainda mais definição, após retirar o plopping, você pode fazer o "scrunch" (amassar os fios de baixo para cima com as mãos ou com a camiseta de algodão) para reforçar a formação dos cachos, e em seguida aplicar um pouco de óleo finalizador para dar brilho e selar as pontas.
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
        borderRadius: 12,
        marginBottom: 20,
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

export default Card9;