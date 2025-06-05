import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card11 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/3d/88/20/3d8820597a7953f5bb2985a7f62e5022.jpg' }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>Finalização com Twist Out:</Text>
                <Text style={styles.description}>
                O Twist Out é uma das técnicas de finalização mais tradicionais e queridas entre quem possui cabelos cacheados e crespos. Ele consiste em modelar os fios por meio de torções, promovendo definição, volume, textura e proteção durante a secagem. Além de estilizar, é uma técnica que ajuda a reduzir o frizz e a preservar a hidratação dos cabelos.
                </Text>
                <Text style={styles.sectionTitle}>Por que o Twist Out é tão eficiente?</Text>
                <Text style={styles.description}>
                    ✅Define e modela os cachos: ajuda a criar cachos ou ondas mais uniformes e bem formados.{"\n"}
                    ✅Confere volume controlado: ideal para quem deseja mais corpo e movimento, mas sem perder a definição.{"\n"}
                    ✅Protege os fios: ao torcer e deixar secar sem manipular, evita que o cabelo quebre ou sofra com o atrito.{"\n"}
                    ✅Versatilidade: pode ser feito de diversas formas — twists grossos, finos, duplos ou até triplos, dependendo do efeito desejado.{"\n"}
                </Text>
                <Text style={styles.sectionTitle}>Como fazer o Twist Out corretamente:</Text>
                <Text style={styles.sectionTitle}>Preparação dos fios:</Text>
                <Text style={styles.description}>
                - Lave e condicione os cabelos normalmente.{"\n"}
                - Retire o excesso de água com uma camiseta de algodão ou toalha de microfibra, evitando o frizz.{"\n"}
                - Deixe os fios úmidos, mas não encharcados.
                </Text>
                <Text style={styles.sectionTitle}>Aplicação de finalizadores:</Text>
                <Text style={styles.description}>
                    - Aplique um creme de pentear, gel ou ativador de cachos, de acordo com a textura do seu cabelo e o resultado esperado.{"\n"}
                    - Prefira produtos que proporcionem hidratação e fixação leve, garantindo que o cabelo fique modelado, mas com movimento natural.
                </Text>
                <Text style={styles.sectionTitle}>Divisão do cabelo:</Text>
                <Text style={styles.description}>
                    Separe os fios em pequenas mechas, de acordo com o grau de definição desejado:{"\n"}
                    ➡️Mechas mais finas = maior definição, mas menos volume.{"\n"}
                    ➡️Mechas mais grossas = mais volume, porém definição mais suave.{"\n"}
                    Use prendedores ou grampos para manter a organização das seções.
                </Text> 
                <Text style={styles.sectionTitle}>Formação dos twists:</Text>
                <Text style={styles.description}>
                    - Pegue cada mecha e divida-a em duas partes iguais.{"\n"}
                    - Torça as duas partes uma sobre a outra, de forma firme, mas sem apertar excessivamente, para não causar tensão ou quebra nos fios.{"\n"}
                    - Continue torcendo até o comprimento total da mecha.{"\n"}
                    - Se quiser, enrole a ponta ao final, formando um pequeno coque ou molinha, para manter a torção bem selada.
                </Text> 
                <Text style={styles.sectionTitle}>Secagem:</Text>
                <Text style={styles.description}>
                    - Deixe os twists secarem completamente ao natural, evitando manipular para não desmanchar a modelagem.{"\n"}
                    - Caso tenha pressa, utilize um difusor na temperatura média ou fria, sempre sem desfazer as torções.{"\n"}
                    - É essencial que o cabelo esteja totalmente seco antes de desfazer os twists, para evitar frizz e garantir máxima definição.
                </Text> 
                <Text style={styles.sectionTitle}>Desfazendo os twists:</Text>
                <Text style={styles.description}>
                    - Quando os fios estiverem secos, aplique algumas gotas de óleo vegetal leve (como argan ou jojoba) nas mãos para ajudar a deslizar pelos fios e reduzir o atrito.{"\n"}
                    - Com delicadeza, desenrole cada twist, separando-os aos poucos com os dedos.{"\n"}
                    - Se desejar mais volume, utilize um pente garfo na raiz ou "solte" ainda mais as mechas, sempre com suavidade.
                </Text> 
                <Text style={styles.sectionTitle}>Benefícios do Twist Out:</Text>
                <Text style={styles.description}>
                    ✅Definição e controle: cachos mais definidos e com menor risco de frizz.{"\n"}
                    ✅Versatilidade: permite criar desde estilos mais controlados e formais até looks volumosos e despojados.{"\n"}
                    ✅Proteção: torcer os fios reduz o atrito com o ambiente e evita o embaraço durante a secagem.{"\n"}
                    ✅Baixa manipulação: reduz o manuseio durante a secagem, prevenindo quebra e mantendo a integridade dos fios.
                </Text>
                <Text style={styles.sectionTitle}>Indicado para:</Text>
                 
                <Text style={styles.description}>
                    ➡️Cabelos cacheados, crespos e em transição: ideal para quem quer estimular a formação de cachos e controlar a definição.{"\n"}
                    ➡️Quem deseja criar estilos diferentes sem recorrer a ferramentas térmicas ou químicas.{"\n"}
                    ➡️Quem está passando pela transição capilar, pois o twist out ajuda a uniformizar a textura entre a raiz natural e as pontas alisadas.
                </Text>
                <Text style={styles.sectionTitle}>Dica extra:</Text>
                <Text style={styles.description}>
                - Para um efeito mais natural e volumoso, faça twists médios a grossos.{"\n"}
                - Para uma definição extrema e cachos bem marcados, prefira twists finos e deixe-os secar por um tempo prolongado.{"\n"}
                - Sempre desfaça os twists com o cabelo completamente seco para evitar frizz excessivo.{"\n"}
                - Use produtos com bom fator de definição para garantir mais durabilidade ao penteado.
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

export default Card11;