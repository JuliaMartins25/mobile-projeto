import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card3 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.card} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/5f/71/2a/5f712a241080b54e13224a6a58f118e5.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Cabelos Masculinos</Text>

        <Text style={styles.sectionTitle}>
          Tipos de Cabelo Masculino: Tem Diferença?
        </Text>
        <Text style={styles.description}>
          Sim! Cada tipo de cabelo (liso, ondulado, cacheado e crespo) tem
          características e necessidades específicas que influenciam diretamente
          na forma correta de cuidar.
        </Text>

        <Text style={styles.sectionTitle}>Classificação dos Tipos de Cabelo</Text>
        <Text style={styles.description}>
          A classificação é feita por números (1 a 4) e letras (A, B, C), com
          base em curvatura e espessura dos fios:
        </Text>
        <Text style={styles.tableHeader}>
          Tipo | Subtipos | Características principais
        </Text>
        <Text style={styles.tableRow}>
          1 - Liso | 1A, 1B, 1C | Fios retos, oleosos, pouco volume e frizz.
        </Text>
        <Text style={styles.tableRow}>
          2 - Ondulado | 2A, 2B, 2C | Ondas soltas a intensas, mais volume, frizz.
        </Text>
        <Text style={styles.tableRow}>
          3 - Cacheado | 3A, 3B, 3C | Cachos definidos, frizz, precisam de hidratação.
        </Text>
        <Text style={styles.tableRow}>
          4 - Crespo | 4A, 4B, 4C | Cachos fechados ou zigue-zague, muito volume, secos e frágeis.
        </Text>

        <Text style={styles.sectionTitle}>Cuidados por Tipo de Cabelo</Text>
        
        <Text style={styles.bold}>Cabelo Liso (1A-1C)</Text>
        <Text style={styles.description}>
          Tendência à oleosidade.
          {"\n\n"}Cuidados ideais:
          {"\n"}• Shampoo purificante/antirresíduos (sem agredir o couro cabeludo).
          {"\n"}• Condicionador leve, que não pese nos fios.
          {"\n"}• Evitar produtos oleosos na raiz.
        </Text>

        <Text style={styles.bold}>Cabelo Ondulado (2A-2C)</Text>
        <Text style={styles.description}>
          Tendência ao frizz e ressecamento nas pontas.
          {"\n\n"}Cuidados ideais:
          {"\n"}• Hidratação leve a moderada.
          {"\n"}• Finalizadores que realcem a curvatura sem pesar.
          {"\n"}• Evitar pente seco (melhor pentear com os fios úmidos).
        </Text>

        <Text style={styles.bold}>Cabelo Cacheado (3A-3C)</Text>
        <Text style={styles.description}>
          Cachos definidos, mas que perdem hidratação facilmente.
          {"\n\n"}Cuidados ideais:
          {"\n"}• Hidratação frequente.
          {"\n"}• Leave-in ou creme de pentear para definição e controle de frizz.
          {"\n"}• Evitar lavagens excessivas (3x por semana é o suficiente).
        </Text>

        <Text style={styles.bold}>Cabelo Crespo (4A-4C)</Text>
        <Text style={styles.description}>
          Fios muito secos, frágeis e com alta porosidade.
          {"\n\n"}Cuidados ideais:
          {"\n"}• Hidratação intensa + nutrição + umectação com óleos.
          {"\n"}• Finalização com cremes mais densos ou manteigas.
          {"\n"}• Pentear com muito cuidado e sempre úmido.
        </Text>

        <Text style={styles.sectionTitle}>
          Dica Sustentável: Produtos em Barrinhas
        </Text>
        <Text style={styles.description}>
          Barrinhas de shampoo e condicionador veganas e naturais (como da B.O.B) são uma boa alternativa:
          {"\n"}• Menos impacto ambiental.
          {"\n"}• Ativos mais concentrados.
          {"\n"}• Sem sulfatos, parabenos ou silicones.
          {"\n\n"}Exemplos:
          {"\n"}• Shampoo Purificante: ideal para cabelos oleosos (lisos).
          {"\n"}• Condicionador Modelador: ideal para ondulados, cacheados e crespos – pode ser usado como leave-in.
        </Text>

        <Text style={styles.sectionTitle}>Rotina Personalizada é Essencial</Text>
        <Text style={styles.description}>
          Conheça seu tipo de cabelo (curvatura + textura).
          {"\n"}Escolha produtos e frequência de lavagem conforme a necessidade real dos fios.
          {"\n"}Evite generalizações: o que funciona para um tipo de fio pode prejudicar outro.
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
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
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
  },
  tableHeader: {
    fontWeight: "bold",
    color: "#A2D2FF",
    marginTop: 10,
    marginBottom: 2,
  },
  tableRow: {
    color: "#4A4A4A",
    fontSize: 14,
    marginBottom: 2,
  },
});

export default Card3;
