import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card19 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/a8/9e/58/a89e5808538a9ba9395c072a5cd42414.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Secagem com Proteção Térmica</Text>

        <Text style={styles.sectionTitle}>Objetivo</Text>
        <Text style={styles.description}>
          Proteger os fios de cabelo dos danos causados pelo calor do secador e garantir uma secagem saudável.
        </Text>

        <Text style={styles.sectionTitle}>Uso de Protetor Térmico</Text>
        <Text style={styles.bold}>Escolha do Produto:</Text>
        <Text style={styles.description}>
          Formas: Protetores térmicos estão disponíveis em spray ou creme.
        </Text>
        <Text style={styles.bold}>Spray:</Text>
        <Text style={styles.description}>
          Ideal para uma aplicação leve e uniforme, adequado para todos os tipos de cabelo.
        </Text>
        <Text style={styles.bold}>Creme:</Text>
        <Text style={styles.description}>
          Pode oferecer hidratação adicional, ideal para cabelos mais secos ou danificados.
        </Text>

        <Text style={styles.bold}>Aplicação:</Text>
        <Text style={styles.description}>
          Aplique o protetor térmico em todo o comprimento do cabelo, evitando a raiz para não deixar o cabelo pesado.
          Certifique-se de cobrir bem as pontas, que são mais suscetíveis a danos.
        </Text>

        <Text style={styles.sectionTitle}>Técnica de Secagem</Text>
        <Text style={styles.bold}>Temperatura do Secador:</Text>
        <Text style={styles.description}>
          Ar Morno: Prefira secar o cabelo com ar morno em vez de quente. Isso reduz o risco de queimaduras e danos aos fios.
        </Text>
        <Text style={styles.description}>
          Evitar Ar Quente: O ar quente pode ressecar e danificar a estrutura do cabelo, levando a frizz e quebra.
        </Text>

        <Text style={styles.bold}>Distância do Secador:</Text>
        <Text style={styles.description}>
          Mantenha o secador a pelo menos 15 cm de distância do couro cabeludo. Isso ajuda a evitar o superaquecimento na área da raiz.
          Mover o secador constantemente ajuda a distribuir o calor de maneira uniforme.
        </Text>

        <Text style={styles.sectionTitle}>Dicas Adicionais</Text>
        <Text style={styles.bold}>Secagem Natural:</Text>
        <Text style={styles.description}>
          Sempre que possível, considere deixar o cabelo secar naturalmente antes de usar o secador para reduzir a exposição ao calor.
        </Text>
        <Text style={styles.bold}>Dividir em Mechas:</Text>
        <Text style={styles.description}>
          Para uma secagem mais eficiente, divida o cabelo em seções. Isso ajuda a garantir que todos os fios recebam atenção e proteção.
        </Text>
        <Text style={styles.bold}>Finalização:</Text>
        <Text style={styles.description}>
          Após a secagem, considere aplicar um sérum ou óleo leve para selar a umidade e adicionar brilho.
        </Text>

        <Text style={styles.description}>
          Essas práticas ajudam a manter a saúde dos fios e a evitar danos a longo prazo, garantindo um cabelo bonito e bem cuidado.
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#A2D2FF",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 17,
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
    marginTop: 10,
  },
  image: {
    width: 290,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
});

export default Card19;
