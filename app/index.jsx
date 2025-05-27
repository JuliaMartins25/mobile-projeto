import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import ExploreCards from "./exploreCards";
import Botao from "./components/buttons/button";
import Carousel from "./components/carousel/carousel";

export default function Screen() {
  const carouselData = [
    {
      id: 1,
      title: "Quer ter um antes e depois assim?",
      description:
        "Com nosso app, você consegue alcançar resultados em apenas 1 mês!",
      image:
        "https://i.pinimg.com/736x/89/70/ef/8970ef978c8459be7dc48c07b7894821.jpg",
      date: "Última atualização: 25 abril 2025",
    },
    {
      id: 2,
      title: "Dicas de cuidados para homens!",
      description:
        "Por aqui, você vera dicas para manter seu cabelo saudável e estiloso!",
      image:
        "https://i.pinimg.com/736x/e5/0d/92/e50d92d67a1620bd929a538c424a6813.jpg",
      date: "Última atualização: 01 abril 2025",
    },

    {
      id: 3,
      title: "Quer descobrir seu tipo de cabelo e curvatura?",
      description:
        "Descubra seu tipo de cabelo e curvatura fazendo nossos quizzes!!",
      image:
        "https://i.pinimg.com/736x/5a/f4/21/5af421b6323c9c537298cc8c7ad25f67.jpg",
      date: "Última atualização: 03 junho 2025",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, width: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Destaque</Text>

          <Carousel data={carouselData} />

          <Text style={styles.title}>Quizzes</Text>
          <View style={styles.buttonWrapper}>
            <Botao />
          </View>
          <Text style={styles.title}>Explorar</Text>
          <ExploreCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 20,
    backgroundColor: "#A2D2FF",
  },
  buttonWrapper: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
},
  title: {
    fontSize: 24,
    fontWeight: "regular",
    color: "#F96380",
    textAlign: "left",
    width: "100%",
    marginLeft: 20,
    marginTop: 15,
  },
});
