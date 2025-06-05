import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card17 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/fa/e8/7c/fae87cd0ea54006bb1eeedd4c783319a.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Pomada ou Cera para Modelagem sem Rigidez</Text>

        <Text style={styles.sectionTitle}>Objetivo</Text>
        <Text style={styles.description}>
          Modelar o cabelo sem criar um efeito rígido ou pesado, permitindo que os fios mantenham movimento e flexibilidade.
        </Text>

        <Text style={styles.sectionTitle}>Tipos de Produtos</Text>

        <Text style={styles.bold}>Pomadas Matte:</Text>
        <Text style={styles.description}>
          Características: Oferecem um acabamento opaco, ideal para um look mais natural.
        </Text>
        <Text style={styles.description}>
          Uso: Perfeitas para estilos descontraídos, como ondas suaves ou texturização leve.
        </Text>

        <Text style={styles.bold}>Pomadas com Brilho:</Text>
        <Text style={styles.description}>
          Características: Proporcionam um efeito brilhante e polido.
        </Text>
        <Text style={styles.description}>
          Uso: Mais adequadas para penteados formais ou quando se busca um visual mais sofisticado.
        </Text>

        <Text style={styles.sectionTitle}>Aplicação</Text>
        <Text style={styles.bold}>Quantidade:</Text>
        <Text style={styles.description}>
          Comece com uma pequena quantidade (do tamanho de uma moeda). A aplicação excessiva pode resultar em fios pesados e oleosos.
        </Text>

        <Text style={styles.bold}>Aquecimento:</Text>
        <Text style={styles.description}>
          Aqueça o produto entre as mãos antes de aplicar. Isso facilita a distribuição uniforme.
        </Text>

        <Text style={styles.bold}>Distribuição:</Text>
        <Text style={styles.description}>
          Aplique do comprimento às pontas, evitando a raiz para não deixar o cabelo oleoso. Trabalhe mecha por mecha, garantindo que o produto se espalhe bem.
        </Text>

        <Text style={styles.sectionTitle}>Dicas Adicionais</Text>
        <Text style={styles.description}>
          Evitar exageros: Adicione mais produto gradualmente, se necessário. É mais fácil acrescentar do que remover.
        </Text>
        <Text style={styles.description}>
          Finalização: Use os dedos para moldar o cabelo e criar o estilo desejado, mantendo a naturalidade.
        </Text>
        <Text style={styles.description}>
          Reaplicação: Se o cabelo perder a forma ao longo do dia, uma leve umidade pode ajudar a reativar o produto.
        </Text>

        <Text style={styles.description}>
          Essas práticas ajudam a alcançar um estilo leve e solto, ideal para o dia a dia ou ocasiões especiais.
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


export default Card17;
