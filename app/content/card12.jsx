import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card12 = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/4d/59/e4/4d59e446155bf3a2c3752ae3f1fb6bda.jpg' }}
                    style={styles.image}
                    
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
                <Text style={styles.sectionTitle}>Seleção dos ativos extras:</Text>
                <Text style={styles.description}>
                    Óleos essenciais: são altamente concentrados, exigindo uso moderado e responsável.{"\n"}
                    ✅Lavanda: promove efeito calmante no couro cabeludo, ideal para quem sofre com coceira, sensibilidade ou queda por estresse.{"\n"}
                    ✅Alecrim: estimula a circulação sanguínea, potencializando o crescimento capilar e combatendo a queda.{"\n"}
                    ✅Hortelã-pimenta: promove sensação de frescor e pode ativar a oxigenação no couro cabeludo.{"\n\n"}
                    Óleos vegetais: promovem nutrição profunda ao fio, selando a hidratação e protegendo contra a perda de água.{"\n"}
                    ✅Óleo de coco: ótimo para cabelos secos, com alta capacidade de penetração na fibra capilar.{"\n"}
                    ✅Óleo de rícino: fortalece os fios e auxilia no crescimento.{"\n"}
                    ✅Óleo de argan: ideal para dar brilho e maciez, além de combater o frizz.
                </Text> 
                <Text style={styles.sectionTitle}>Proporção ideal:</Text>
                <Text style={styles.description}>
                    ➡️Para cada 2 colheres de sopa de máscara capilar:{"\n"}
                    - Adicione 2 a 3 gotas de óleo essencial (não exceda para evitar efeitos adversos).{"\n"}
                    - Adicione até 1 colher de chá de óleo vegetal, conforme o grau de ressecamento do cabelo.{"\n"}
                </Text> 
                <Text style={styles.sectionTitle}>Mistura:</Text>
                <Text style={styles.description}>
                    ➡️Em um recipiente não metálico, misture bem todos os ingredientes até formar um creme homogêneo.{"\n"}
                </Text> 
                <Text style={styles.sectionTitle}>Aplicação:</Text>
                <Text style={styles.description}>
                    ➡️Após lavar o cabelo com shampoo, retire o excesso de água com uma toalha.{"\n"}
                    ➡️Aplique a misturinha mecha por mecha, enluvando bem para garantir a penetração dos ativos.{"\n"}
                    ➡️Deixe agir de acordo com o tempo recomendado pela máscara base (geralmente de 10 a 20 minutos).{"\n"}
                    ➡️Enxágue abundantemente, finalizando como de costume.
                </Text>
                <Text style={styles.sectionTitle}>Benefícios das misturinhas capilares:</Text>
                <Text style={styles.description}>
                    ✅Ação personalizada: trata problemas específicos como queda, ressecamento, quebra ou falta de brilho.{"\n"}
                    ✅Aromaterapia integrada: os aromas dos óleos essenciais influenciam positivamente no humor e na sensação de relaxamento durante o tratamento.{"\n"}
                    ✅Fortalecimento capilar: ingredientes naturais fortalecem e nutrem profundamente os fios.{"\n"}
                    ✅Prevenção de danos: cria uma camada protetora que reduz agressões futuras, como calor ou poluição.
                </Text>
                <Text style={styles.sectionTitle}>Cuidados importantes:</Text>
                <Text style={styles.description}>
                ⚠️Sempre faça um teste de sensibilidade na pele antes de usar óleos essenciais, para evitar reações alérgicas.{"\n"}
                ⚠️Não utilize óleos essenciais puros diretamente no couro cabeludo ou nos fios, pois podem causar irritação.{"\n"}
                ⚠️Evite misturar ativos incompatíveis ou de ação oposta (ex.: proteínas em excesso podem deixar o fio rígido).{"\n"}
                ⚠️Utilize óleos essenciais de qualidade, preferencialmente 100% puros e naturais.
                </Text>
                <Text style={styles.sectionTitle}>Exemplos de misturinhas conforme a necessidade:</Text>
                <Text style={styles.sectionTitle}>➡️Para cabelos ressecados:</Text>
                <Text style={styles.description}>
                Máscara hidratante + óleo de coco + óleo essencial de lavanda.
                </Text>
                <Text style={styles.sectionTitle}>➡️Para estimular crescimento:</Text>
                <Text style={styles.description}>
                Máscara fortalecedora + óleo de rícino + óleo essencial de alecrim.
                </Text>
                <Text style={styles.sectionTitle}>➡️Para controle de oleosidade:</Text>
                <Text style={styles.description}>
                Máscara leve + 1 gota de óleo essencial de tea tree (melaleuca) + óleo essencial de hortelã.
                </Text>
                <Text style={styles.sectionTitle}>➡️Para brilho intenso:</Text>
                <Text style={styles.description}>
                Máscara nutritiva + óleo de argan + óleo essencial de ylang-ylang.
                </Text>
                <Text style={styles.sectionTitle}>Quem pode fazer misturinhas?</Text>
                <Text style={styles.description}>
                ✔️Todos os tipos de cabelo: lisos, ondulados, cacheados e crespos.{"\n"}
                ✔️Especialmente recomendado para quem busca tratamentos mais naturais e personalizados.{"\n"}
                ✔️Ideal para quem deseja potencializar produtos sem gastar muito.
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