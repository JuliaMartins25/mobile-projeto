import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Card4 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image source={require("../../assets/img4.png")} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>Solução para Fios Ressecados</Text>
                <Text style={styles.description}>
                  Hidratação com Maionese Caseira: Nutrição Power para Fios Ressecados
                </Text>
                <Text style={styles.description}>
                    Você já ouviu falar em usar maionese no cabelo? Pode parecer estranho à primeira vista, mas acredite: essa é uma dica antiga e poderosa para recuperar cabelos ressecados e sem vida. A maionese é rica em óleos vegetais, ovos e vinagre, ingredientes que juntos oferecem nutrição intensa, brilho e maciez. Ela age diretamente na fibra capilar, devolvendo lipídios perdidos e promovendo uma hidratação profunda com efeito duradouro.
                </Text>
                <Text style={styles.sectionTitle}>Benefícios da Hidratação com Maionese:</Text>
                <Text style={styles.description}>
                    - Restaura a oleosidade natural dos fios sem deixá-los pesados{"\n"}
                    - Fortalece a estrutura capilar graças às proteínas dos ovos{"\n"}
                    - Melhora a elasticidade e o brilho com o poder dos óleos vegetais{"\n"}
                    - Combate o ressecamento e o frizz, deixando os fios mais alinhados{"\n"}
                    - Ideal para cabelos cacheados, crespos e quimicamente tratados
                </Text>
                <Text style={styles.sectionTitle}>Receita Caseira: Nutrição Profunda com Maionese</Text>
                <Text style={styles.description}>
                    Você vai precisar de:{"\n"}
                    - 1 colher (sopa) de maionese caseira ou maionese capilar{"\n"}
                    - 2 colheres (sopa) da sua máscara de nutrição preferida
                </Text>
                <Text style={styles.sectionTitle}>Modo de preparo e aplicação:</Text>
                <Text style={styles.description}>
                    1. Em um potinho, misture bem a maionese com a máscara até formar uma mistura homogênea.{"\n"}
                    2. Com os cabelos lavados e úmidos, aplique a mistura mecha por mecha, enluvando bem.{"\n"}
                    3. Coloque uma touca plástica ou térmica e deixe agir por 20 a 30 minutos.{"\n"}
                    4. Enxágue com água fria (isso ajuda a selar as cutículas e potencializa o brilho).{"\n"}
                    5. Finalize como de costume.
                </Text>
                <Text style={styles.sectionTitle}>Dica de Produtos Prontos:</Text>
                <Text style={styles.description}>
                    - Maionese Capilar da Salon Line (linha Tô de Cacho): contém óleos vegetais, proteína do ovo e colágeno.{"\n"}
                    - Maionese Capilar da Skala: 100% vegana, enriquecida com óleos nutritivos e sem ingredientes de origem animal.
                </Text>
                <Text style={styles.sectionTitle}>Resultado Esperado:</Text>
                <Text style={styles.description}>
                    Logo após o uso, o cabelo ganha uma aparência mais saudável, sedosa e controlada. Com o uso contínuo, a fibra capilar se fortalece, os cachos ou fios alisados ficam mais definidos e a quebra diminui significativamente.
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
        padding: 16, // Adicionado padding para espaçamento interno
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 22,
        shadowColor: '#000', // Ajustado para sombra mais visível
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 8,
        padding: 28,
        margin: 24,
        width: '90%', // Ajustado para responsividade
        maxWidth: 340, // Limite de largura
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333', // Cor mais escura para contraste
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
        textAlign: 'justify', // Justificado para melhor leitura
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

export default Card4;