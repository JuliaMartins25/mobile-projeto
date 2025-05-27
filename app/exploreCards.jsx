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
    title: " Descubra o seu tipo de cabelo",
    image: require("../assets/img1.png"),
    link: "/content/card1",
  },
  {
    id: "2",
    title: "Tipos de cabelo masculino: tem diferença? Entenda!",
    image: require("../assets/img2.png"),
    link: "/content/card2",
  },
  {
    id: "3",
    title: "Tipos de cacho: descubra o seu!",
    image: require("../assets/img3.png"),
    link: "/content/card3",
  },
  {
    id: "4",
    title: "Qual o corte de cabelo da moda que mais combina com você?",
    image: require("../assets/img4.png"),
    link: "/content/card4",
  },
  {
    id: "5",
    title: "Produtos capilares que você precisa testar!",
    image: require("../assets/img5.png"),
    link: "/content/card5",
  },
  {
    id: "6",
    title: "5 receitas caseiras que te ajudarão a ter um cabelo saudável",
    image: require("../assets/img6.png"),
    link: "/content/card6",
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
    color: '#007bff', // Azul padrão de link
    textAlign: 'center',
    marginBottom: 8,
    textDecorationLine: 'underline',
    fontSize: 12,
  }
});

export default ExploreCards;
