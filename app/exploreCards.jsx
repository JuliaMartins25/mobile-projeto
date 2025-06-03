import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Link } from "expo-router";

const data = [
  {
    id: "1",
    title: "Cronograma Capilar",
    image: require("../assets/cards/cronogramas.jpg"),
    link: "/content/card1",
  },
  {
    id: "2",
    title: "Cabelo Poroso",
    image: require("../assets/cards/poroso.jpg"),
    link: "/content/card2",
  },
  {
    id: "3",
    title: "Cabelos Masculinos",
    image: require("../assets/cards/masculino.jpg"),
    link: "/content/card3",
  },
  {
    id: "4",
    title: "Solução para Fios Ressecados!",
    image: require("../assets/cards/ressecados.jpg"),
    link: "/content/card4",
  },
  {
    id: "5",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },
  {
    id: "6",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "7",
    title: "Cronograma Capilar",
    image: require("../assets/cards/cronogramas.jpg"),
    link: "/content/card1",
  },
  {
    id: "8",
    title: "Cabelo Poroso",
    image: require("../assets/cards/poroso.jpg"),
    link: "/content/card2",
  },
  {
    id: "9",
    title: "Cabelos Masculinos",
    image: require("../assets/cards/masculino.jpg"),
    link: "/content/card3",
  },
  {
    id: "10",
    title: "Solução para Fios Ressecados!",
    image: require("../assets/cards/ressecados.jpg"),
    link: "/content/card4",
  },
  {
    id: "11",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },
  {
    id: "12",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "13",
    title: "Cronograma Capilar",
    image: require("../assets/cards/cronogramas.jpg"),
    link: "/content/card1",
  },
  {
    id: "14",
    title: "Cabelo Poroso",
    image: require("../assets/cards/poroso.jpg"),
    link: "/content/card2",
  },
  {
    id: "15",
    title: "Cabelos Masculinos",
    image: require("../assets/cards/masculino.jpg"),
    link: "/content/card3",
  },
  {
    id: "16",
    title: "Solução para Fios Ressecados!",
    image: require("../assets/cards/ressecados.jpg"),
    link: "/content/card4",
  },
  {
    id: "17",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },
  {
    id: "18",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "19",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },
  {
    id: "20",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "21",
    title: "Massagem Capilar!",
    image: require("../assets/cards/massagem.jpg"),
    link: "/content/card21",
  },
  {
    id: "22",
    title: "Transição Capilar",
    image: require("../assets/cards/massagem.jpg"),
    link: "/content/card5",
  },
  {
    id: "23",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "24",
    title: "Cronograma Capilar",
    image: require("../assets/cards/cronogramas.jpg"),
    link: "/content/card1",
  },
  {
    id: "25",
    title: "Cabelo Poroso",
    image: require("../assets/cards/poroso.jpg"),
    link: "/content/card2",
  },
  {
    id: "26",
    title: "Cabelos Masculinos",
    image: require("../assets/cards/masculino.jpg"),
    link: "/content/card3",
  },
  {
    id: "27",
    title: "Solução para Fios Ressecados!",
    image: require("../assets/cards/ressecados.jpg"),
    link: "/content/card4",
  },
  {
    id: "28",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },
  {
    id: "29",
    title: "Hidratação Pós-Sol",
    image: require("../assets/cards/posol.jpg"),
    link: "/content/card6",
  },
  {
    id: "30",
    title: "Transição Capilar",
    image: require("../assets/cards/transicao.jpg"),
    link: "/content/card5",
  },

];

const ExploreCards = () => {
  const [searchText, setSearchText] = useState("");

  // Filtra os cards conforme o texto digitado
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função para lidar com links vazios ou inválidos
  const handlePress = (link) => {
    if (link && link.startsWith("http")) {
      Linking.openURL(link);
    } else {
      // Aqui você pode navegar para outras telas ou mostrar um alerta
      console.log("Link interno ou inválido:", link);
    }
  };

  return (
    <View>
      <View style={styles.Container}>
        <Ionicons name="search" size={20} color="#C4C4C4" style={styles.icon} />
        <TextInput
          style={styles.pesquisa}
          placeholder="Pesquisar conteúdos..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Mostrar mensagem quando não há resultados */}
      {filteredData.length === 0 && searchText.length > 0 && (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>Nenhum resultado encontrado</Text>
          <Text style={styles.noResultsSubtext}>
            Tente pesquisar por outros termos
          </Text>
        </View>
      )}

      <FlatList
        data={filteredData} // Usando filteredData ao invés de data
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={filteredData.length > 1 ? styles.row : null} // Evita erro quando há apenas 1 item
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => handlePress(item.link)}
            >
              <Image
                source={item.image}
                style={styles.imageCard}
                resizeMode="cover"
              />
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Link href={item.link} style={styles.saibaMaisText}>Saiba mais</Link>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 45,
    width: "75%",
    paddingHorizontal: 15,
    marginVertical: 20,
    alignSelf: "center",
  },
  icon: {
    marginRight: 10,
  },
  pesquisa: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  noResultsContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 5,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: "#999",
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#FFAFCC", // Rosa claro
    borderRadius: 10,
    overflow: "hidden",
    width: "48%",
    height: 280,
    elevation: 3,
    marginTop: 10,
  },
  imageCard: {
    width: "100%",
    height: 200,
  },
  cardText: {
    padding: 8,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  saibaMaisText: {
    color: '#F96380', 
    textAlign: 'center',
    marginBottom: 8,
    textDecorationLine: 'underline',
    fontSize: 12,
  }
});

export default ExploreCards;
