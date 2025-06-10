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
    title: "Pre-poo",
    image: require("../assets/cards/prepoo.png"),
    link: "/content/card7",
  },
  {
    id: "8",
    title: "Reverse Washing",
    image: require("../assets/cards/lavagemcontraria.jpg"),
    link: "/content/card8",
  },
  {
    id: "9",
    title: "Técnica Plopping",
    image: require("../assets/cards/card9.jpg"),
    link: "/content/card9",
  },
  {
    id: "10",
    title: "Hidratação com Ácido Hialurônico",
    image: require("../assets/cards/hialuronico.jpg"),
    link: "/content/card10",
  },
  {
    id: "11",
    title: "Finalização com Twist Out:",
    image: require("../assets/cards/tostout.jpg"),
    link: "/content/card11",
  },
  {
    id: "12",
    title: "Tratamentos com misturas",
    image: require("../assets/cards/misturinhas.png"),
    link: "/content/card12",
  },
  {
    id: "13",
    title: "Spray de vinagre de maçã para selagem",
    image: require("../assets/cards/vinagre.png"),
    link: "/content/card13",
  },
  {
    id: "14",
    title: "Umectação noturna",
    image: require("../assets/cards/umectacao.png"),
    link: "/content/card14",
  },
  {
    id: "15",
    title: "Esfoliação capilar",
    image: require("../assets/cards/esfoliacao.png"),
    link: "/content/card15",
  },
  {
    id: "16",
    title: "Low Poo",
    image: require("../assets/cards/lowpow.png"),
    link: "/content/card16",
  },
  {
    id: "17",
    title: "Pomada para modelagem",
    image: require("../assets/cards/pomada.png"),
    link: "/content/card17",
  },
  {
    id: "18",
    title: "Barbeiro de Confiança",
    image: require("../assets/cards/barbeiro.png"),
    link: "/content/card18",
  },
  {
    id: "19",
    title: "Secagem com proteção térmica",
    image: require("../assets/cards/protetortermico.png"),
    link: "/content/card19",
  },
  {
    id: "20",
    title: "Ajuste na rotina",
    image: require("../assets/cards/rotina.png"),
    link: "/content/card20",
  },
  {
    id: "21",
    title: "Massagem capilar!",
    image: require("../assets/cards/massagem.jpg"),
    link: "/content/card21",
  },
  {
    id: "22",
    title: "Fronha de cetim",
    image: require("../assets/cards/fronha.png"),
    link: "/content/card22",
  },
  {
    id: "23",
    title: "Detox capilar",
    image: require("../assets/cards/detox.png"),
    link: "/content/card23",
  },
  {
    id: "24",
    title: "Técnica LOC",
    image: require("../assets/cards/loc.png"),
    link: "/content/card24",
  },
  {
    id: "25",
    title: "Desembaraçar cabelo corretamente",
    image: require("../assets/cards/desembaracar.png"),
    link: "/content/card25",
  },
  {
    id: "26",
    title: "Temperatura para lavar o cabelo",
    image: require("../assets/cards/chuveiro.png"),
    link: "/content/card26",
  },
  {
    id: "27",
    title: "Cuidados pós química",
    image: require("../assets/cards/quimica.png"),
    link: "/content/card27",
  },
  {
    id: "28",
    title: "Corte regular",
    image: require("../assets/cards/corte.png"),
    link: "/content/card28",
  },
  {
    id: "29",
    title: "Secagem rápida",
    image: require("../assets/cards/secagem.png"),
    link: "/content/card29",
  },
  {
    id: "30",
    title: "Controle de oleosidade",
    image: require("../assets/cards/oleoso.png"),
    link: "/content/card30",
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
