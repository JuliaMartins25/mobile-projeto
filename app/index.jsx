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
      title: "Encontre os melhores produtos para seu cabelo",
      description:
        "Explore recomendações personalizadas com base no seu tipo de fio!",
      image:
        "https://i.pinimg.com/736x/89/70/ef/8970ef978c8459be7dc48c07b7894821.jpg",
      date: "Última atualização: 25 abril 2025",
    },
    {
      id: 2,
      title: "Acompanhe sua evolução com fotos",
      description:
        "Por aqui, você pode registrar o antes e depois e veja sua transformação capilar!",
      image:
        "https://i.pinimg.com/736x/69/be/e5/69bee54c0c2a0170adc85e81c3fcde26.jpg",
      date: "Última atualização: 01 abril 2025",
    },

    {
      id: 3,
      title: "Acesso a dicas exclusivas de cuidados",
      description:
        "Acesse conteúdos e dicas escritos por especialistas.",
      image:
        "https://i.pinimg.com/736x/93/87/eb/9387eb434e13a058eafe157c2266082c.jpg",
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
