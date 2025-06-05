import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Card27 = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/fc/40/82/fc40827f8de2e6bb6eba897b90f5cc79.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Procedimentos químicos: cuidados antes, durante e depois
        </Text>
        <Text style={styles.description}>
          Descolorações, tinturas e alisamentos alteram profundamente a
          estrutura capilar. O cuidado adequado previne danos severos e mantém a
          beleza dos fios.
        </Text>

        <Text style={styles.sectionTitle}>Como cuidar:</Text>
        <Text style={styles.description}>
          - <Text style={styles.bold}>Antes:</Text> realize tratamentos
          reconstrutores com queratina ou colágeno, para fortalecer a fibra.
          {"\n"}- <Text style={styles.bold}>Durante:</Text> utilize produtos
          profissionais, que minimizam os danos.{"\n"}-{" "}
          <Text style={styles.bold}>Depois:</Text> mantenha cronograma capilar
          rigoroso, focando em hidratação e nutrição.
        </Text>

        <Text style={styles.sectionTitle}>✅ Dica extra:</Text>
        <Text style={styles.description}>
          Evite realizar mais de um procedimento químico ao mesmo tempo (ex.:
          descoloração + alisamento).
        </Text>

        <Text style={styles.sectionTitle}>✅ Benefícios:</Text>
        <Text style={styles.description}>
          <Text style={styles.bold}>
            1. Fios fortes e resistentes mesmo após química.
          </Text>
          {"\n"}
          <Text style={styles.bold}>
            2. Menor risco de quebra e elasticidade excessiva.
          </Text>
          {"\n"}
          <Text style={styles.bold}>3. Manutenção da cor e do brilho.</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2D2FF",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    padding: 20,
    margin: 16,
    width: "90%",
    maxWidth: 360,
  },
  image: {
    width: 290,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F96380",
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#4A4A4A",
    textAlign: "justify",
    marginBottom: 10,
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
    color: "#F96380",
  },
});

export default Card27;
