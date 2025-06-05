import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card1 = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/ea/fc/11/eafc11011546cb955ed7a917946f8f47.jpg",
          }}
          style={styles.image}
        />
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

        <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
        <Text style={styles.description}>
          Use produtos específicos para cada etapa e respeite o tempo de pausa indicado. Evite excessos, principalmente na reconstrução, que feita em demasia pode enrijecer os fios.
        </Text>

        <Text style={styles.sectionTitle}>Quais são os tratamentos no cronograma capilar?</Text>
        <Text style={styles.description}>
          O cronograma capilar é composto por três tratamentos principais: hidratação, umectação/nutrição e reconstrução. A frequência de cada um depende das necessidades do cabelo.
        </Text>

        <Text style={styles.sectionTitle}>Cronograma capilar: hidratação</Text>
        <Text style={styles.description}>
          A hidratação visa devolver a umidade aos fios, especialmente após danos causados por calor, sol e poluição. Máscaras com ácido hialurônico proporcionam alta hidratação e força.
        </Text>

        <Text style={styles.sectionTitle}>Cronograma capilar: nutrição ou umectação</Text>
        <Text style={styles.description}>
          A nutrição repõe lipídios, essenciais para cabelos mais secos, especialmente cacheados e crespos. Máscaras com óleos naturais são boas opções para esse passo.
        </Text>

        <Text style={styles.sectionTitle}>Cronograma capilar: reconstrução</Text>
        <Text style={styles.description}>
          A reconstrução repõe a massa capilar perdida, fundamental para cabelos danificados por processos químicos como coloração e alisamentos.
        </Text>

        <Text style={styles.sectionTitle}>Como fazer cronograma capilar?</Text>
        <Text style={styles.description}>
          Teste a porosidade do cabelo para identificar as necessidades e escolha os tratamentos adequados. Geralmente inclui 2-3 tratamentos por semana.
        </Text>

        <Text style={styles.sectionTitle}>Teste de porosidade</Text>
        <Text style={styles.description}>
          O teste determina a capacidade do cabelo de absorver nutrientes:{"\n"}
          - Se os fios afundam: alta porosidade (danificados).{"\n"}
          - Se boiam: baixa porosidade (difícil absorção).{"\n"}
          - No meio: porosidade média e saudável.
        </Text>

        <Text style={styles.sectionTitle}>Cronograma capilar semanal</Text>
        <Text style={styles.description}>
          Baixa porosidade: priorize hidratação.{"\n"}
          Média porosidade: nutrição e reconstrução.{"\n"}
          Alta porosidade: foco em reconstrução e acidificação.
        </Text>

        <Text style={styles.sectionTitle}>Tipos de cronograma capilar</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Para crescimento:</Text> fortalece os fios, prevenindo a quebra.{"\n\n"}
          <Text style={styles.bold}>Para cabelo oleoso:</Text> hidratação e controle de oleosidade são essenciais.{"\n\n"}
          <Text style={styles.bold}>Para cabelo cacheado:</Text> nutrição é importante devido ao ressecamento natural.{"\n\n"}
          <Text style={styles.bold}>Para loiras:</Text> reconstrução e hidratação mantêm a cor e evitam danos.{"\n\n"}
          <Text style={styles.bold}>Para cabelo quimicamente tratado:</Text> reconstrução e nutrição repõem massa e hidratam.{"\n\n"}
          <Text style={styles.bold}>Para cabelo liso:</Text> hidratação e controle de oleosidade ou nutrição, conforme necessidade.
        </Text>

        <Text style={styles.sectionTitle}>Como montar um kit cronograma capilar?</Text>
        <Text style={styles.description}>
          O kit deve ser escolhido com base no tipo de cabelo e nos tratamentos necessários, usando produtos específicos para hidratação, nutrição e reconstrução.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2D2FF',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    padding: 20,
    margin: 16,
    width: '90%',
    maxWidth: 360,
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
    color: '#333',
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
    textAlign: 'justify',
    marginBottom: 10,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
    color: '#F96380',
  },
});

export default Card1;
