import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.card}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/1f/0a/5f/1f0a5fe0c29f14a0a1a7bfb41b239c2c.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Cabelo Poroso</Text>

        <Text style={styles.sectionTitle}>O que é cabelo poroso?</Text>
        <Text style={styles.description}>
          Fios com cutículas abertas, que não retêm nutrientes e hidratação.
          {"\n\n"}
          Resultado de excesso de química, calor (secador/chapinha) e exposição
          solar.{"\n\n"}
          Apresenta-se como cabelo áspero, sem brilho, frágil e com frizz.
        </Text>

        <Text style={styles.sectionTitle}>Grau de porosidade</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Baixa porosidade:</Text> cutículas muito
          fechadas, difícil absorção de produtos.{"\n\n"}
          <Text style={styles.bold}>Média porosidade:</Text> absorve nutrientes,
          mas perde com facilidade.{"\n\n"}
          <Text style={styles.bold}>Alta porosidade:</Text> cutículas muito
          abertas, absorve mas não retém.
        </Text>

        <Text style={styles.sectionTitle}>Causas da porosidade</Text>
        <Text style={styles.description}>
          Alisamentos, descoloração e tinturas frequentes.{"\n\n"}
          Uso constante de calor sem proteção.{"\n\n"}
          Falta de cuidados diários.
        </Text>

        <Text style={styles.sectionTitle}>Como identificar cabelo poroso?</Text>
        <Text style={styles.description}>
          Textura áspera, frizz e pontas duplas.{"\n\n"}
          Fios quebradiços e elásticos.{"\n\n"}
          Teste do toque: sensação de “areia” nos fios ao passar os dedos.
        </Text>

        <Text style={styles.sectionTitle}>
          Diferença entre cabelo poroso, ressecado e danificado
        </Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Poroso:</Text> não retém tratamento,
          cutículas permanentemente abertas.{"\n\n"}
          <Text style={styles.bold}>Ressecado:</Text> fios secos no comprimento,
          mas sem danos estruturais.{"\n\n"}
          <Text style={styles.bold}>Danificado:</Text> estrutura interna
          comprometida por química excessiva.
        </Text>

        <Text style={styles.sectionTitle}>Como tratar cabelo poroso?</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Baixa porosidade:</Text> foco em hidratação
          profunda.{"\n\n"}
          <Text style={styles.bold}>Média porosidade:</Text> foco em nutrição
          intensa.{"\n\n"}
          <Text style={styles.bold}>Alta porosidade:</Text> foco em reconstrução
          + acidificação.
        </Text>

        <Text style={styles.sectionTitle}>
          Quanto tempo leva para recuperar?
        </Text>
        <Text style={styles.description}>
          Varia de 30 a 90 dias, com cronograma capilar consistente e adaptado.
        </Text>

        <Text style={styles.sectionTitle}>Como evitar a porosidade?</Text>
        <Text style={styles.description}>
          Usar protetor térmico e produtos com filtro solar.{"\n\n"}
          Evitar excesso de química e calor.{"\n\n"}
          Manter um cronograma capilar preventivo.
        </Text>

        <Text style={styles.sectionTitle}>
          Cronograma capilar ideal para cabelo poroso
        </Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>Hidratação:</Text> repõe água e ajuda a
          selar cutículas.{"\n\n"}
          <Text style={styles.bold}>Nutrição:</Text> repõe lipídios, evita frizz
          e melhora brilho.{"\n\n"}
          <Text style={styles.bold}>Reconstrução:</Text> repõe massa capilar e
          fortalece a fibra.
        </Text>

        <Text style={styles.extra}>
          Dica: use sempre produtos adequados ao nível de porosidade e evite
          excessos de reconstrução, que podem enrijecer os fios.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2D2FF",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    shadowColor: "#A2D2FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    padding: 28,
    margin: 24,
    width: 340,
  },
  image: {
    width: 290,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#A2D2FF",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F96380",
    marginTop: 18,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#4A4A4A",
    textAlign: "left",
    marginBottom: 6,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
    color: "#F96380",
  },
  extra: {
    color: "#F96380",
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Card2;
