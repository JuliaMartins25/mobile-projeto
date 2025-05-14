import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, ScrollView } from "react-native";
import ExploreCards from "./exploreCards";
import Pesquisa from "./pesquisa";
import Botao from "./components/buttons/button"
import Carousel from "./components/carousel/carousel";

export default function Screen() {
    const carouselData = [
        {
            id: 1,
            title: "Veja o antes e o depois de um cabelo ralo",
            description: "Descubra como transformar cabelos danificados em fios longos, saudáveis e cheios de vida com as melhores práticas de cuidados capilares.",
            image: "https://i.pinimg.com/736x/97/db/a2/97dba2e0cb08cffe01b06f29fa80dae7.jpg",
            date: "Última atualização: 25 abril 2025",
        },
        {
            id: 2,
            title: "Alcance esse cabelo dos sonhos em pouco tempo!",
            description: "Descubra os segredos para um cabelo liso impecável, brilhoso e super saudável! Aprenda as melhores técnicas, produtos e cuidados para manter seus fios alinhados, sedosos e livres de danos.",
            image: "https://i.pinimg.com/736x/a4/48/ba/a448ba4d131fcf4a846b1de0f641fa8f.jpg",
            date: "Última atualização: 01 abril 2025",
        },

        {
            id: 3,
            title: "Não sabe como finalizar seu cabelo?",
            description: "Se você tem dificuldade em finalizar seu cabelo e nunca encontra a técnica ideal, aqui você vai descobrir as melhores dicas para definir, modelar e cuidar dos seus fios. Aprenda quais métodos funcionam para cada tipo de curvatura e conquiste um cabelo incrível todos os dias!",
            image: "https://i.pinimg.com/736x/17/d8/5d/17d85d8110755256015843e5caee2533.jpg",
            date: "Última atualização: 03 junho 2025",
        }
    ]


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, width: "100%" }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Destaque</Text>

                    <Carousel data={carouselData} />

                    <Text style={styles.title}>Explorar</Text>
                    <Pesquisa />
                    <Botao />
                    <ExploreCards />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A2D2FF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'regular',
        color: '#F96380',
        textAlign: 'left',
        width: '100%',
        marginLeft: 20,
        marginTop: 15,

    }
});