import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card18 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/f0/55/a9/f055a9c322fd1cc16820dde6001142d2.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Barbeiro de Confiança e Manutenção Regular</Text>

        <Text style={styles.sectionTitle}>Importância da Manutenção</Text>
        <Text style={styles.description}>
          Manter o cabelo bem cortado e saudável é essencial para garantir um estilo sempre definido e atual.
        </Text>

        <Text style={styles.sectionTitle}>Frequência de Corte</Text>
        <Text style={styles.bold}>Intervalo Recomendado:</Text>
        <Text style={styles.description}>
          Corte o cabelo a cada 3 a 6 semanas.
        </Text>
        <Text style={styles.bold}>3 Semanas:</Text>
        <Text style={styles.description}>
          Ideal para estilos mais curtos ou quando se busca um visual bem definido.
        </Text>
        <Text style={styles.bold}>6 Semanas:</Text>
        <Text style={styles.description}>
          Adequado para cabelos mais longos ou cortes que permitem um pouco mais de crescimento.
        </Text>

        <Text style={styles.sectionTitle}>Escolha do Barbeiro</Text>
        <Text style={styles.bold}>Confiança:</Text>
        <Text style={styles.description}>
          Procure um barbeiro com boas referências e que entenda suas necessidades. Uma boa comunicação é fundamental para transmitir suas expectativas.
        </Text>
        <Text style={styles.bold}>Consulta Inicial:</Text>
        <Text style={styles.description}>
          Converse sobre o formato do seu rosto e como isso influencia o estilo de corte. Discuta suas preferências pessoais e o que você espera em termos de manutenção.
        </Text>

        <Text style={styles.sectionTitle}>Considerações para o Corte</Text>
        <Text style={styles.bold}>Formato do Rosto:</Text>
        <Text style={styles.description}>
          Rosto Oval: Praticamente qualquer estilo funciona bem.
        </Text>
        <Text style={styles.description}>
          Rosto Redondo: Cortes que alongam o rosto, como camadas longas ou cortes em ângulo.
        </Text>
        <Text style={styles.description}>
          Rosto Quadrado: Estilos mais suaves, como camadas ou cortes com franja, para suavizar ângulos.
        </Text>
        <Text style={styles.description}>
          Rosto Comprido: Cortes que adicionam largura, como franjas ou volume nas laterais.
        </Text>

        <Text style={styles.bold}>Tipo de Fio:</Text>
        <Text style={styles.description}>
          Fios Finos: Cortes que criam volume, como texturização.
        </Text>
        <Text style={styles.description}>
          Fios Grossos: Cortes que removem peso, como camadas ou desbaste.
        </Text>
        <Text style={styles.description}>
          Cabelos Cacheados: Estilos que preservam a forma dos cachos e evitam frizz.
        </Text>

        <Text style={styles.sectionTitle}>Finalização</Text>
        <Text style={styles.description}>
          Converse sobre estilos de finalização: pergunte ao barbeiro sobre produtos e técnicas que funcionam melhor para seu tipo de cabelo.
        </Text>
        <Text style={styles.description}>
          Discuta rotinas de cuidados e finalização que podem ajudar a manter o estilo entre os cortes.
        </Text>

        <Text style={styles.description}>
          Manter um relacionamento próximo com um barbeiro de confiança garante que você sempre tenha o melhor estilo e cuidados para seu cabelo.
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

export default Card18;
