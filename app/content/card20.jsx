import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Card20 = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.card}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/2b/1f/8a/2b1f8ac4ac0e820bda09ce89eff53028.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Ajuste na Rotina Conforme o Estilo de Vida</Text>

        <Text style={styles.sectionTitle}>Importância da Adaptação</Text>
        <Text style={styles.description}>
          A rotina de cuidados capilares deve ser ajustada de acordo com seu estilo de vida, 
          especialmente se você pratica esportes ou usa capacete com frequência. Isso ajuda a manter 
          a saúde do cabelo e evitar problemas como acúmulo de sujeira e ressecamento.
        </Text>

        <Text style={styles.sectionTitle}>Lavagem Regular</Text>
        <Text style={styles.bold}>Frequência de Lavagem:</Text>
        <Text style={styles.description}>
          Aumente a frequência de lavagens se você transpira muito durante atividades físicas ou utiliza capacete. 
          Isso evita o acúmulo de suor, oleosidade e sujeira no couro cabeludo e nos fios.
        </Text>

        <Text style={styles.sectionTitle}>Shampoos Refrescantes</Text>
        <Text style={styles.bold}>Escolha do Produto:</Text>
        <Text style={styles.description}>
          Opte por shampoos refrescantes que ajudam a limpar profundamente e proporcionar uma sensação de frescor. 
          Fórmulas com mentol ou ingredientes cítricos são ótimas opções.
        </Text>
        <Text style={styles.bold}>Uso:</Text>
        <Text style={styles.description}>
          Aplique o shampoo em cabelos molhados, massageando bem o couro cabeludo para garantir uma limpeza eficaz.
        </Text>

        <Text style={styles.sectionTitle}>Finalização</Text>
        <Text style={styles.bold}>Leave-in Leve:</Text>
        <Text style={styles.description}>
          Função: Um leave-in leve ajuda a manter a hidratação sem pesar os fios. Isso é especialmente importante após lavagens mais frequentes.
        </Text>
        <Text style={styles.bold}>Aplicação:</Text>
        <Text style={styles.description}>
          Aplique uma pequena quantidade no cabelo úmido, concentrando-se no comprimento e nas pontas. 
          Isso ajuda a evitar o ressecamento e mantém o cabelo saudável.
        </Text>

        <Text style={styles.sectionTitle}>Hidratação Adicional</Text>
        <Text style={styles.description}>
          Para cabelos que ficam sujeitos a estresse devido ao suor e ao calor, considere usar um condicionador leve ou uma máscara hidratante uma vez por semana.
        </Text>

        <Text style={styles.sectionTitle}>Dicas Adicionais</Text>
        <Text style={styles.bold}>Secagem:</Text>
        <Text style={styles.description}>
          Deixe o cabelo secar ao ar sempre que possível, especialmente após atividades físicas, para evitar danos causados pelo calor.
        </Text>
        <Text style={styles.bold}>Proteção:</Text>
        <Text style={styles.description}>
          Se você usa capacete com frequência, considere usar um boné ou bandana como proteção adicional, 
          ajudando a absorver o suor e mantendo o cabelo mais fresco.
        </Text>
        <Text style={styles.bold}>Rotina de Exercícios:</Text>
        <Text style={styles.description}>
          Se você se exercita diariamente, ajuste sua rotina de lavagem para evitar que o cabelo fique oleoso ou com odor desagradável.
        </Text>

        <Text style={styles.description}>
          Essas práticas garantem que, independentemente do seu estilo de vida ativo, 
          seu cabelo permaneça limpo, saudável e bem tratado.
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

export default Card20;
